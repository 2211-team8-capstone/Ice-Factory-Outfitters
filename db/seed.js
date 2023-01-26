const client = require("./client");
const { getAllUsers, createUser } = require("./models/users");
const { createProduct, getAllProducts } = require("./models/products");
const { addProductToCart, getCartByUserId } = require("./models/cart");
const {fakeProducts} = require("./mockdata");

async function dropTables() {
  try {
    console.log("starting to drop tables....");

    await client.query(`
    DROP TABLE IF EXISTS cart;
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
      image TEXT
    );

    CREATE TABLE cart (
      id SERIAL PRIMARY KEY, 
      "userId" INTEGER REFERENCES users(id) NOT NULL,
      "productId" INTEGER REFERENCES products(id) NOT NULL,
      "totalPrice" INTEGER 
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
      image:
        "https://res.cloudinary.com/dulsfxtjz/image/upload/v1674586719/Ice%20Factory%20Outfitters/colorado-avalanche-inglasco-2022-stanley-cup-champions-mini-wood-hockey-stick_pi4962000_ff_4962194-3aa8d435411e57074444_full_dzihic.jpg",
    });
    await createProduct({
      category: "Pucks",
      name: "Ice Disk",
      description: "Just an everyday puck",
      price: 5,
      quantity: 1,
      size: "Standard",
      color: "Black",
      image:
        "https://res.cloudinary.com/dulsfxtjz/image/upload/v1674586738/Ice%20Factory%20Outfitters/19315599-hockey-puck-in-fire-flames-and-splashing-water_uawhis.jpg",
    });
    await createProduct({
      category: "Skates",
      name: "Ice Dancers",
      description: "Some really quicks skates",
      price: 150,
      quantity: 2,
      size: "11",
      color: "All of 'em",
      image:
        "https://res.cloudinary.com/dulsfxtjz/image/upload/v1674586757/Ice%20Factory%20Outfitters/7eecd7fe-a348-4785-aa2e-24bbfeb47d28.9ff6ad024759fabb26ecd21b971f7b63_fle9n5.jpg",
    });
    await createProduct({
      category: "Helmets",
      name: "Hockey Bucket",
      description: "Not a literal bucket",
      price: 100,
      quantity: 1,
      size: "Jumbo",
      color: "Metalic",
      image:
        "https://res.cloudinary.com/dulsfxtjz/image/upload/v1674586866/Ice%20Factory%20Outfitters/2c31e3b26e1db8c6d80f26f528d8706f_jpawwn.jpg",
    });
    await createProduct({
      category: "Protective Gear",
      name: "Ice Mitts",
      description: "Gloves, but for Hockey",
      price: 80,
      quantity: 2,
      size: "Large",
      color: "Red",
      image:
        "https://res.cloudinary.com/dulsfxtjz/image/upload/v1674586879/Ice%20Factory%20Outfitters/warrior-hockey-gloves-alpha-dx3-sr_isqanu.jpg",
    });
    await createProduct({
      category: "Goalie Gear",
      name: "Gaolie Stuff",
      description: "Lots and lots of padding",
      price: 180,
      quantity: 5,
      size: "Large",
      color: "Burgundy",
      image:
        "https://res.cloudinary.com/dulsfxtjz/image/upload/v1674586893/Ice%20Factory%20Outfitters/goalie-equipment-edit_ppea39.webp",
    });
    await createProduct({
      category: "Accessories",
      name: "Hockey Bag",
      description: "Big bag for big gear",
      price: 75,
      quantity: 1,
      size: "Very Big",
      color: "Team Colors",
      image:
        "https://res.cloudinary.com/dulsfxtjz/image/upload/v1674586905/Ice%20Factory%20Outfitters/41qeYLTzn4S._AC_SY1000__utf9d0.jpg",
    });
    await createProduct({
      category: "Team Apparel",
      name: "Sweaters",
      description: "Only Avalanche gear",
      price: 50,
      quantity: 100,
      size: "All",
      color: "Avalanche Colors",
      image:
        "https://res.cloudinary.com/dulsfxtjz/image/upload/v1674586917/Ice%20Factory%20Outfitters/colorado-avalanche-primegreen-authentic-adidas-alternate-jersey-6_y7joz5.jpg",
    });
    
    await Promise.all(seedData.map(createProduct));

    console.log("Finished creating products!");
  } catch (error) {
    console.error("Error building products!");
    throw error;
  }
}

async function createInitialCart() {
  try {
    console.log("Starting to create initial cart...");
    await addProductToCart({
      userId: 2,
      productId: 5,
    });
    await addProductToCart({
      userId: 2,
      productId: 2,
    });
    await addProductToCart({
      userId: 2,
      productId: 3,
    });
    await addProductToCart({
      userId: 3,
      productId: 2,
    });
    console.log("Finished creating cart!");
  } catch (error) {
    console.error("Error building cart!");
    throw error;
  }
}

async function rebuildDB() {
  try {
    client.connect();
    console.log("beginning to drop tables...")
    await dropTables();
    console.log("finished drop tables!")

    console.log("beginning to create tables...")
    await createTables();
    console.log("finished create tables!")

    console.log("beginning to create users...")
    await createInitialUsers();
    console.log("finished creating users!")

    console.log("beginning to create products...")
    await Promise.all(fakeProducts.map(createProduct));
    console.log("finished creating products")

    console.log("beginning to create cart...")
    await createInitialCart();
    console.log("finished creating cart!")
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
    // console.log("this is getAllProducts-------->", products);

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
