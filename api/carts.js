const express = require("express");
const cartsRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const { createCarts, getMyCart, getMyCartId, addProductToCartItems } = require("../db/models/carts");

cartsRouter.use((req, res, next) => {
  console.log("A request is being made to /carts");

  next();
});

cartsRouter.get("/:cartId", async (req, res, next) => {
  const { cartId } = req.params;
  console.log("this is re.body", req.params);

  console.log("this is userId after destructure", cartId);
  try {
    const myCart = await getMyCart(cartId);
    console.log("this is newCart created and sent from DB", myCart);
    if (!myCart) {
      next({
        name: "FetchCartError",
        message: `Failed to fetch cart by cartId`,
      });
    } else {
      res.send(myCart);
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

cartsRouter.post("/", async (req, res, next) => {
  // console.log('this is re.body', req.body)
  const { userId } = req.body;

  console.log("this is userId after destructure", userId);
  try {
    const newCart = await createCarts(userId);
    console.log("this is newCart created and sent from DB", newCart);
    if (!newCart) {
      next({
        name: "ExistingCartError",
        message: `A cart with name has already been created for this user`,
      });
    } else {
      res.send(newCart);
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

cartsRouter.get("/cartNum/:userId", async (req, res, next) => {
  const { userId } = req.params;
  console.log("this is re.body", req.params);

  console.log("this is userId after destructure", userId);
  try {
    const myCart = await getMyCartId(userId);
    console.log("this is newCart created and sent from DB", myCart);
    if (!myCart) {
      next({
        name: "FetchCartError",
        message: `Failed to fetch cart by cartId`,
      });
    } else {
      res.send(myCart);
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

cartsRouter.post("/addprod/:cartId", async (req, res, next) => {
  const { cartId } = req.params;
  console.log("this is req params", req.params);
  console.log("this is cartId after destructure", cartId);

  console.log('this is req body', req.body)
  const { productId, quantity } = req.body;
  console.log("this is productId, quanity after destructure", productId, quantity);

  try {
    const productAddedToCart = await addProductToCartItems(cartId, productId, quantity);
    console.log("this is prodcut created in cartItems and sent from DB", productAddedToCart);
    if (!productAddedToCart) {
      next({
        name: "FetchCartError",
        message: `Failed to add product to carItems`,
      });
    } else {
      res.send(productAddedToCart);
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = cartsRouter;
