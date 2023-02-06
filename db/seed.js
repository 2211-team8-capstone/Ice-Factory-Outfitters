const client = require("./client");
const { getAllUsers, createUser } = require("./models/users");
const { getAllAdmins, createAdmin } = require("./models/admins");
const { createProduct, getAllProducts } = require("./models/products");
const {
  addProductToCartItems,
  createCarts,
  getMyCart,
} = require("./models/carts");
const { fakeProducts } = require("./mockdata");

async function dropTables() {
  try {
    console.log("starting to drop tables....");

    await client.query(`
    DROP TABLE IF EXISTS cartItems CASCADE;
    DROP TABLE IF EXISTS carts CASCADE;
    DROP TABLE IF EXISTS products CASCADE;
    DROP TABLE IF EXISTS users CASCADE;
    DROP TABLE IF EXISTS admins CASCADE;
    `);

    console.log("completed dropping tables!");
  } catch (error) {
    console.error("Error dropping tables!");
    throw error;
  }
}

async function createTables() {
  try {
    console.log("starting to create tables....");

    await client.query(`
    CREATE TABLE admins (
      id SERIAL PRIMARY KEY,
      adminEmail VARCHAR(255) UNIQUE NOT NULL,
      adminPassword VARCHAR(255) NOT NULL,
      "isAdmin" BOOLEAN DEFAULT false
    );

    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      phone TEXT,
      firstName VARCHAR(255),
      lastName VARCHAR(255),
      addressNum INTEGER,
      addressSt VARCHAR(255),
      city VARCHAR(255),
      state VARCHAR(255),
      zip INTEGER
    );

    CREATE TABLE products (
      id SERIAL PRIMARY KEY,
      category VARCHAR(255) NULL,
      name VARCHAR(255) UNIQUE NOT NULL,
      description TEXT NOT NULL,
      price INTEGER NOT NULL,
      quantity INTEGER NULL,
      size VARCHAR (255) NULL,
      color VARCHAR (255)  NULL,
      image TEXT
    );

    CREATE TABLE carts (
      id SERIAL PRIMARY KEY, 
      "userId" INTEGER REFERENCES users(id) NOT NULL
    ); 

    CREATE TABLE cartItems (
      id SERIAL PRIMARY KEY,
      "cartId" INTEGER REFERENCES carts(id) NOT NULL,
      "productId" INTEGER REFERENCES products(id) NOT NULL,
      quantity INTEGER DEFAULT 1
    );
    `);

    console.log("finished creating tables!");
  } catch (error) {
    console.error("Error building tables!");
    throw error;
  }
}

async function createInitialAdmins() {
  try {
    console.log("Starting to create admin...");

    await createAdmin({
      adminEmail: "admin@email.com",
      adminPassword: "passwordadmin",
      isAdmin: true,
    });

    console.log("Finished creating admin!");
  } catch (error) {
    console.error("Error creating admin!");
    throw error;
  }
}

async function createInitialUsers() {
  try {
    console.log("Starting to create users...");

    await createUser({
      email: "kevin@email.com",
      password: "password1",
      phone: "111 111-1111",
      firstName: "Kevin",
      lastName: "Chicago",
      addressNum: 1234,
      addressSt: "Main St",
      city: "Chicago",
      state: "IL",
      zip: 12345,
    });
    await createUser({
      email: "jae@email.com",
      password: "password12",
      phone: "222 222-2222",
      firstName: "Jae",
      lastName: "Chicago",
      addressNum: 9876,
      addressSt: "Main St",
      city: "Chicago",
      state: "IL",
      zip: 12345,
    });
    await createUser({
      email: "thomas@email.com",
      password: "password",
      phone: "333 333-3333",
      firstName: "Thomas",
      lastName: "Denver",
      addressNum: 6666,
      addressSt: "Main St",
      city: "Denver",
      state: "CO",
      zip: 98765,
    });
    await createUser({
      email: "dylan@email.com",
      password: "password1234",
      phone: "444 444-4444",
      firstName: "Dylan",
      lastName: "Richmond",
      addressNum: 9999,
      addressSt: "Main St",
      city: "Richmond",
      state: "VA",
      zip: 13579,
    });

    console.log("Finished creating users!");
  } catch (error) {
    console.error("Error creating users!");
    throw error;
  }
}

async function createInitialCarts() {
  try {
    console.log("Starting to create initial Carts...");
    await createCarts(1),
      await createCarts(2),
      await createCarts(3),
      await createCarts(4);
    console.log("Finished to create initial Carts...");
  } catch (error) {
    console.error("Error buidling inital Carts");
    throw error;
  }
}

async function createInitialCartItems() {
  try {
    console.log("Starting to create initial cartItems...");
    await addProductToCartItems(2, 5, 1);
    await addProductToCartItems(2, 2, 1);
    await addProductToCartItems(3, 3, 1);
    await addProductToCartItems(4, 2, 1);
    console.log("Finished creating cartItems!");
  } catch (error) {
    console.error("Error building cartItems!");
    throw error;
  }
}

async function rebuildDB() {
  try {
    client.connect();
    console.log("beginning to drop tables...");
    await dropTables();
    console.log("finished drop tables!");

    console.log("beginning to create tables...");
    await createTables();
    console.log("finished create tables!");

    console.log("beginning to create admin...");
    await createInitialAdmins();
    console.log("finished creating admin!");

    console.log("beginning to create users...");
    await createInitialUsers();
    console.log("finished creating users!");

    console.log("beginning to create products...");
    await Promise.all(fakeProducts.map(createProduct));
    console.log("finished creating products");

    console.log("Beginning to create Cart...");
    await createInitialCarts();
    console.log("Finished creting Carts");

    console.log("beginning to create cartItems...");
    await createInitialCartItems();
    console.log("finished creating cartItems!");
  } catch (error) {
    console.error(error);
  }
}

async function testDB() {
  try {
    console.log("starting to test the database....");

    await getAllAdmins();

    await getAllUsers();

    await getAllProducts();

    await getMyCart(2);

    console.log("finsihed testing the database!");
  } catch (error) {
    console.error("Error testing database!");
    throw error;
  }
}

rebuildDB()
  .then(testDB)
  .catch(console.error)
  .finally(() => client.end());
