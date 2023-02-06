const express = require("express");
const cartsRouter = express.Router();
const { JWT_SECRET } = process.env;
const {
  createCarts,
  getMyCart,
  getMyCartId,
  addProductToCartItems,
  destroyCartItem,
  updateCartItemsQty,
} = require("../db/models/carts");

cartsRouter.use((req, res, next) => {
  console.log("A request is being made to /carts");

  next();
});

cartsRouter.get("/:cartId", async (req, res, next) => {
  const { cartId } = req.params;

  try {
    const myCart = await getMyCart(cartId);
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
  const { userId } = req.body;

  try {
    const newCart = await createCarts(userId);
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

  try {
    const myCart = await getMyCartId(userId);
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
  const { productId, quantity } = req.body;

  try {
    const productAddedToCart = await addProductToCartItems(
      cartId,
      productId,
      quantity
    );
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

cartsRouter.delete("/", async (req, res, next) => {
  const { cartItemId } = req.body;

  try {
    const result = await destroyCartItem(cartItemId);
    res.send({
      result,
    });
  } catch (error) {
    next(error);
  }
});

cartsRouter.patch("/updateqty", async (req, res, next) => {
  const { cartItemsId, newQuantity } = req.body;

  try {
    const result = await updateCartItemsQty(cartItemsId, newQuantity);
    if (!result) {
      next({
        name: "UpdateQtyError",
        message: `Failed to update product quantity in cartItems`,
      });
    } else {
      res.send(result);
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = cartsRouter;
