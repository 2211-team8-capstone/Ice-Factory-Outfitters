const express = require("express");
const cartsRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const { createCarts } = require("../db/models/carts");

cartsRouter.use((req, res, next) => {
  console.log("A request is being made to /carts");

  next();
});

cartsRouter.post("/", async (req, res, next) => {
    console.log('this is re.body', req.body)
    const {userId} = req.body;

    console.log('this is userId after destructure', userId);
    try {
        const newCart = await createCarts(userId);
        console.log('this is newCart created and sent from DB', newCart);
        if (!newCart) {
            next({
                name: "ExistingCartError",
                message: `A cart with name has already been created for this user`
            });
        } else {
            res.send(newCart);
        }
    } catch ({ name, message }) {
        next({ name, message })
    }
})

module.exports = cartsRouter;