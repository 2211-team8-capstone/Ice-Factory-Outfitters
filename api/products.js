const express = require("express");
const productsRouter = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  destroyProduct,
  updateProduct,
  getProductByName,
} = require("../db/models/products");


productsRouter.get("/", async (req, res, next) => {
  try {
    const products = await getAllProducts();

    res.send({
      products,
    });
  } catch (error) {
    next(error);
  }
});

productsRouter.get("/:productid", async (req, res, next) => {
  const { productid } = req.params;

  try {
    const product = await getProductById(productid);
    res.send({
      product,
    });
  } catch (error) {
    next(error);
  }
});

productsRouter.post("/add", async (req, res, next) => {
  const { category, name, description, price, quantity, size, color, image } =
    req.body;

  try {
    const existingProductCheck = await getProductByName(name);
    if (existingProductCheck) {
      res.status(401);
      next({
        name: "ProductExistsError",
        message: `Product ${name} is already a registered product.`,
      });
    } else {
      // create user in the DB
      const product = await createProduct({
        category,
        name,
        description,
        price,
        quantity,
        size,
        color,
        image,
      });
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

  try {
    const result = await destroyProduct(productid);
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
    const result = await updateProduct({ productid, ...fields });
    res.send({
      result,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = productsRouter;
