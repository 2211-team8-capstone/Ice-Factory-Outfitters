const express = require("express");
const apiRouter = express.Router();
const jwt = require("jsonwebtoken");
const { getUserById } = require("../db/models/users");
const usersRouter = require("./users");
const productsRouter = require("./products");
const cartsRouter = require("./carts");
const adminRouter = require("./admin");
const { JWT_SECRET } = process.env;

apiRouter.get("/health", async (req, res, next) => {
  console.log("Server health is getting checked");
  try {
    res.send({
      message: "server healthy",
    });
  } catch (error) {
    next();
  }
});
// assign a user if there is a user to be assigned based on request/authorization
// 1. look at auth/req header and if it wasn't set we can't set user just next out of this block
// 2. we have have auth, so check if prefix of request starts with bearer, if so then take the token off it and assign it to token.
//    2a. try to verify the token, if successfull try to pull the user from the db by id and assign the user
// 3. there was an error in the header format, try again
apiRouter.use(async (req, res, next) => {
  const prefix = "Bearer ";
  const auth = req.header("Authorization");

  if (!auth) {
    console.log("No authorization, moving to next.");
    next();
  } else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);

    try {
      const { id } = jwt.verify(token, JWT_SECRET);

      if (id) {
        req.user = await getUserById(id);
        next();
      } else {
        // maybe come back and fix this error message
        next({
          name: "LostUserIdError",
          message:
            "Could not find specified user. Please log out and log back in.",
        });
      }
    } catch ({ name, message }) {
      next({ name, message });
    }
  } else {
    next({
      name: "AuthorizationHeaderError",
      message: `Authorization token must start with ${prefix}`,
    });
  }
});

// check to see if a user is set from func above ^
apiRouter.use((req, res, next) => {
  if (req.user) {
    console.log("User is set:", req.user);
  }

  next();
});

//***********************  ROUTERS BELOW *********************************

//router to /api/users
apiRouter.use("/users", usersRouter);

//router to /api/products
apiRouter.use("/products", productsRouter);

//router to /api/carts
apiRouter.use("/carts", cartsRouter);

//router to /api/admin
apiRouter.use("/admin", adminRouter);

//******************* ERROR HANDLER ***********************
apiRouter.use((error, req, res, next) => {
  res.send({
    error: "ERROR",
    name: error.name,
    message: error.message,
  });
});

module.exports = apiRouter;
