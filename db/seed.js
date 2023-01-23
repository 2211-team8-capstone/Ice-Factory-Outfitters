const client = require("./client");
const { getAllUsers, createUser } = require("./models/users");
const { createProduct, getAllProducts } = require("./models/products");

async function dropTables() {
  try {
    console.log("starting to drop tables....");

    await client.query(`
    DROP TABLE IF EXISTS products;
    DROP TABLE IF EXISTS users;
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
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    );

    CREATE TABLE products (
      id SERIAL PRIMARY KEY,
      category VARCHAR(255) NOT NULL,
      name VARCHAR(255) UNIQUE NOT NULL,
      description TEXT NOT NULL,
      price INTEGER NOT NULL,
      quantity INTEGER NOT NULL,
      size VARCHAR (255) NOT NULL,
      color VARCHAR (255) NOT NULL,
      image bytea
    );
    `);

    console.log("finished creating tables!");
  } catch (error) {
    console.error("Error building tables!");
    throw error;
  }
}

async function createInitialUsers() {
  try {
    console.log("Starting to create users...");

    const kevin = await createUser({
      email: "kevin@email.com",
      password: "password1",
    });
    const jae = await createUser({
      email: "jae@email.com",
      password: "password12",
    });
    const thomas = await createUser({
      email: "thomas@email.com",
      password: "password123",
    });
    const dylan = await createUser({
      email: "dylan@email.com",
      password: "password1234",
    });

    console.log("Finished creating users!");
  } catch (error) {
    console.error("Error creating users!");
    throw error;
  }
}

async function createInitialProducts() {
  try {
  console.log("Starting to create initial products...");

  await createProduct({
    category: "Sticks",
    name: "Ice Factory Select",
    description: "Hockey Twig",
    price: 100,
    quantity: 1,
    size: "38",
    color: "Ice Blue",
    image: "https://images.footballfanatics.com/colorado-avalanche/colorado-avalanche-inglasco-2022-stanley-cup-champions-mini-wood-hockey-stick_pi4962000_ff_4962194-3aa8d435411e57074444_full.jpg?_hv=2&w=600",
  });
  await createProduct({
    category: "Pucks",
    name: "Ice Disk",
    description: "Just an everyday puck",
    price: 5,
    quantity: 1,
    size: "Standard",
    color: "Black",
  });
  await createProduct({
    category: "Skates",
    name: "Ice Dancers",
    description: "Some really quicks skates",
    price: 150,
    quantity: 2,
    size: "11",
    color: "All of 'em"
  });
  await createProduct({
    category:"Helmets",
    name: "Hockey Bucket",
    description:"Not a literal bucket",
    price: 100,
    quantity: 1,
    size: "Jumbo",
    color: "Metalic",
  });
  await createProduct({
    category: "Protective Gear",
    name: "Ice Mitts",
    description: "Gloves, but for Hockey",
    price: 80,
    quantity: 2,
    size: "Large",
    color: "Red",
  });
  await createProduct({
    category: "Goalie Gear",
    name: "Gaolie Stuff",
    description: "Lots and lots of padding",
    price: 180,
    quantity: 5,
    size: "Large",
    color: "Burgundy",
  });
  await createProduct({
    category: "Accessories",
    name: "Hockey Bag",
    description: "Big bag for big gear",
    price: 75,
    quantity: 1,
    size: "Very Big",
    color: "Team Colors",
  });
  await createProduct({
    category: "Team Apparel",
    name: "Sweaters",
    description: "Only Avalanche gear",
    price: 50,
    quantity: 100,
    size: "All",
    color: "Avalanche Colors",
  });

  console.log("Finished creating products!");
  } catch (error) {
    console.error("Error building products!");
    throw error;
  }
}

async function rebuildDB() {
  try {
    client.connect();

    await dropTables();
    await createTables();
    await createInitialUsers();
    await createInitialProducts();
  } catch (error) {
    console.error(error);
  }
}

async function testDB() {
  try {
    console.log("starting to test the database....");

    const users = await getAllUsers();
    // console.log("this is getAllUsers-------->", users);

    const products = await getAllProducts();
    console.log("this is getAllProducts-------->", products);

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
