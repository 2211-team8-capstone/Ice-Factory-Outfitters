const express = require("express");
const usersRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const {
  getAllUsers,
  getUserByEmail,
  createUser,
  destroyUser,
  updateUser,
} = require("../db/models/users");

usersRouter.use((req, res, next) => {
  console.log("A request is being made to /users");

  next();
});

// register new user
usersRouter.post("/register", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const existingUserCheck = await getUserByEmail(email);
    if (existingUserCheck) {
      res.status(401);
      next({
        name: "UserExistsError",
        message: `Email address ${email} is already a registered account. Please login with those account details.`,
      });
    } else if (password.length < 8) {
      res.status(401);
      next({
        name: "PasswordLengthError",
        message: "Password must be at least 8 characters long.",
      });
    } else {
      // create user in the DB
      const user = await createUser({ email, password });
      // if no user is created, send user reg error
      if (!user) {
        next({
          name: "UserCreationError",
          message: "There was a problem registering you. Please retry.",
        });
      } else {
        // user was created, create token
        const token = jwt.sign(
          {
            id: user.id,
            email,
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
          user,
        });
      }
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

// login users
usersRouter.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  // if no username or password provided, send error
  if (!email || !password) {
    next({
      name: "MissingCredentialsError",
      message: "Please supply both a username and password",
    });
  }

  try {
    const user = await getUserByEmail(email);
    const hashedPassword = user.password;

    let passwordsMatch = await bcrypt.compare(password, hashedPassword);

    if (user && passwordsMatch) {
      // create token & return to user
      const token = jwt.sign({ id: user.id, email }, JWT_SECRET, {
        expiresIn: "1w",
      });
      res.send({ message: "you're logged in!", token, user });
    } else {
      next({
        name: "IncorrectCredentialsError",
        message: "Username or password is incorrect",
      });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.get("/", async (req, res) => {
  const users = await getAllUsers();

  res.send({
    users,
  });
});

usersRouter.get("/profile/:email", async (req, res, next) => {
  const { email } = req.params;
  try {
    const user = await getUserByEmail(email);
    if (!user) {
      next(
        res.status(401).send({
          error: "Error",
          message: "Unable to get a user by that name",
          name: "LogInError",
        })
      );
    }
    res.send(user);
  } catch (error) {
    next(error);
  }
});

usersRouter.delete("/:userid", async (req, res, next) => {
  const { userid } = req.params;

  try {
    const result = await destroyUser(userid);
    res.send({
      result,
    });
  } catch (error) {
    next(error);
  }
});

usersRouter.patch("/:userid", async (req, res, next) => {
  const { userid } = req.params;
  const {
    userEmail,
    userPassword,
    userFirstName,
    userLastName,
    userPhone,
    parseAddressNum,
    userAddressSt,
    userCity,
    userState,
    parseZip,
  } = req.body;

  const fields = {};
  if (userEmail) {
    fields.email = userEmail;
  }
  if (userPassword) {
    fields.password = userPassword;
  }
  if (userFirstName) {
    fields.firstname = userFirstName;
  }
  if (userLastName) {
    fields.lastname = userLastName;
  }
  if (userPhone) {
    fields.phone = userPhone;
  }
  if (parseAddressNum) {
    fields.addressnum = parseAddressNum;
  }
  if (userAddressSt) {
    fields.addressst = userAddressSt;
  }
  if (userCity) {
    fields.city = userCity;
  }
  if (userState) {
    fields.state = userState;
  }
  if (parseZip) {
    fields.zip = parseZip;
  }

  try {
    const result = await updateUser({ userid, ...fields });
    res.send({ result });
  } catch (error) {
    next(error);
  }
});

module.exports = usersRouter;
