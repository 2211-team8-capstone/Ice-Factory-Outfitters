const express = require("express");
const productsRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const {
  createProduct,
  getAllProducts,
  getProductById,
  destroyProduct,
  updateProduct,
  getProductByName,
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

  const { productid } = req.params;
  console.log("this is productID in productsrouter", productid);

  try {
    const product = await getProductById(productid);
    console.log("this is product in productsrouter returned from DB", product);
    res.send({
      product,
    });
  } catch (error) {
    next(error);
  }
});

productsRouter.post("/add", async (req, res, next) => {
  const { category, name, description, price, quantity, size, color, image } = req.body;
  //   console.log("AAAAAAAA", email);

  try {
    const existingProductCheck = await getProductByName(name);
    // console.log("CDCDCCDCDDC", existingProductCheck);

    if (existingProductCheck) {
      res.status(401);
      next({
        name: "ProductExistsError",
        message: `Product ${name} is already a registered product.`,
      });
    } else {
      // create user in the DB
      const product = await createProduct({ category, name, description, price, quantity, size, color, image });
      // if no product is created, send product add error
      if (!product) {
        next({
          name: "ProductCreationError",
          message: "There was a problem adding this product.",
        });
      } else {
        // send success message and product in response
        res.send({
          message: "Product added!",
          product,
        });
      }
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

productsRouter.delete("/:productid", async (req, res, next) => {
  const { productid } = req.params;
  console.log("this is productID in deleteproductsrouter", productid);

  try {
    const result = await destroyProduct(productid);
    console.log("this is message in productsrouter returned from DB", result);
    res.send({
      result,
    });
  } catch (error) {
    next(error);
  }
});

productsRouter.patch("/:productid", async (req, res, next) => {
  const { productid } = req.params;
  const { productName, productDesc, productPrice } = req.body;

  const fields = {};
  if (productName) {
    fields.name = productName;
  }

  if (productDesc) {
    fields.description = productDesc;
  }

  if (productPrice) {
    fields.price = productPrice;
  }

  try {
    // These checks are not working for some reason. They work if you pass an existing productName but they error out if you pass a new name.

    // const checkForProduct = await getProductByName(productName);

    // console.log("AAAAAAAAAAAAAAAAAA", checkForProduct.name);
    // if (checkForProduct.name === productName) {
    //   next({
    //     name: "Product name exists",
    //     message: `A product with name ${productName} already exists`,
    //   });
    // } else if (!checkForProduct.id) {
    //   next({
    //     name: "Product not found",
    //     message: `Product ${productid} not found`,
    //   });
    // } else {

    const result = await updateProduct({ productid, ...fields });
    console.log(
      "this is message in patchproductsrouter returned from DB",
      result
    );
    res.send({
      result,
    });
    // }
  } catch (error) {
    next(error);
  }
});

module.exports = productsRouter;
