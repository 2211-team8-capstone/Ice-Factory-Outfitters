const express = require("express");
const productsRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const {
  createProduct,
  getAllProducts,
  getProductById,
} = require("../db/models/products");

productsRouter.use((req, res, next) => {
  console.log("A request is being made to /products");

  next();
});

productsRouter.get("/", async (req, res, next) => {
  const products = await getAllProducts();

  res.send({
    products,
  });
});

productsRouter.get("/:productid", async (req, res, next) => {
  console.log(req.params);
  
  const {productid} = req.params; 
  console.log('this is productID in productsrouter', productid)

  try {
    const product = await getProductById(productid);
    console.log('this is product in productsrouter returned from DB', product)
    res.send({
      product
    });
  } catch (error) {
    next(error);
  }
});



module.exports = productsRouter;
