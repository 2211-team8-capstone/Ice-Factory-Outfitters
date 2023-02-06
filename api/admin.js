const express = require("express");
const adminRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const {
  getAllAdmins,
  getAdminByEmail,
  createAdmin,
} = require("../db/models/admins");

adminRouter.use((req, res, next) => {
  console.log("A request is being made to /admins");

  next();
});

adminRouter.post("/register", async (req, res, next) => {
  const { adminEmail, adminPassword } = req.body;

  try {
    const existingAdminCheck = await getAdminByEmail(adminEmail);

    if (existingAdminCheck) {
      res.status(401);
      next({
        name: "AdminExistsError",
        message: `Admin Email address ${adminEmail} is already a registered account. Please login with those account details.`,
      });
    } else if (password.length < 8) {
      res.status(401);
      next({
        name: "PasswordLengthError",
        message: "Password must be at least 8 characters long.",
      });
    } else {
      // create user in the DB
      const admin = await createAdmin({ adminEmail, adminPassword });
      // if no user is created, send user reg error
      if (!admin) {
        next({
          name: "AdminCreationError",
          message: "There was a problem registering you. Please retry.",
        });
      } else {
        // admin was created, create token
        const token = jwt.sign(
          {
            id: admin.id,
            adminEmail,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "1w",
          }
        );
        // send success message, token, and user in response
        res.send({
          message: "Thank you for signing up!",
          token,
          admin,
        });
      }
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

adminRouter.post("/login", async (req, res, next) => {
  const { adminEmail, adminPassword } = req.body;
  // if no username or password provided, send error
  if (!adminEmail || !adminPassword) {
    next({
      name: "MissingCredentialsError",
      message: "Please supply both an Admin username and Admin password",
    });
  }

  try {
    const admin = await getAdminByEmail(adminEmail);
    const hashedAdminPassword = admin.adminpassword;
    let adminPasswordsMatch = await bcrypt.compare(
      adminPassword,
      hashedAdminPassword
    );
    if (admin && adminPasswordsMatch) {
      // create token & return to admin
      const token = jwt.sign({ id: admin.id, adminEmail }, JWT_SECRET, {
        expiresIn: "1w",
      });
      res.send({ message: "you're logged in!", token, admin });
    } else {
      next({
        name: "IncorrectCredentialsError",
        message: "Admin username or Admin password is incorrect",
      });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

adminRouter.get("/", async (req, res) => {
  const admins = await getAllAdmins();

  res.send({
    admins,
  });
});

module.exports = adminRouter;
