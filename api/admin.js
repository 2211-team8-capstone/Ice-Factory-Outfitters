const express = require("express");
const adminRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const {
    getAllAdmins,
    getAdminByEmail,
    createAdmin,
} = require("../db/models/admin");


adminRouter.use((req, res, next) => {
    console.log("A request is being made to /admin");

    next();
});

adminRouter.post("/AdminLogin", async (req, res, next) => {
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
        const hashedAdminPassword = admin.password;

        let adminPasswordsMatch = await bcrypt.compare(adminPassword, hashedAdminPassword);

        if (admin && adminPasswordsMatch) {
            // create token & return to user
            const token = jwt.sign({ id: admin.id, email }, JWT_SECRET, {
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