const PORT = process.env.PORT || 8080;
const express = require("express");
const server = express();
const cors = require("cors");
const { client } = require("./db");
const morgan = require("morgan");
require("dotenv").config();

// connect to the db
client.connect();

server.use(cors());
server.use(morgan("dev"));

server.use(express.json());

server.use((req, res, next) => {
  console.log("<____Body Logger START____>");
  console.log(req.body);
  console.log("<_____Body Logger END_____>");

  next();
});

// by default serve up the react app if we don't recognize the route
server.use("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// create route and router for our main API
const apiRouter = require("./api");
server.use("/api", apiRouter);

// start up the server
server.listen(PORT, () => {
  console.log("The server is up on port: ", PORT);
});

// // define a server handle to close open tcp connection after unit tests have run
// const handle = server.listen(PORT, async () => {
//   console.log(`Server is running on ${PORT}!`);

//   try {
//     await client.connect();
//     console.log("Database is open for business!");
//   } catch (error) {
//     console.error("Database is closed for repairs!\n", error);
//   }
// });

// // export server and handle for routes/*.test.js
// module.exports = { server, handle };

// here's our static files
const path = require("path");
server.use(express.static(path.join(__dirname, "build")));