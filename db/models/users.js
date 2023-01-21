// grab our db client connection to use with our adapters
const client = require("../client");
const bcrypt = require("bcrypt");
const SALT_COUNT = 10;

async function createUser({ email, password }) {
  const hashedPassword = await bcrypt.hash(password, SALT_COUNT);

  try {
    const {
      rows: [user],
    } = await client.query(
      `
    INSERT INTO users(email, password)
    VALUES ($1, $2)
    ON CONFLICT (email) DO NOTHING
    RETURNING *;
    `,
      [email, hashedPassword]
    );

    delete user.password;

    return user;
  } catch (error) {
    console.error("Error creating user!");
    throw error;
  }
}

async function getAllUsers() {
  const { rows } = await client.query(`
    SELECT email, password
    FROM users;
  `);

  return rows;
}

async function getUserById(userId) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        SELECT *
        FROM users
        WHERE id=$1;
    `,
      [userId]
    );

    // dont return password with user data
    delete user.password;

    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getUserByEmail(email) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT * 
      FROM users
      WHERE email=$1;
    `,
      [email]
    );

    return user;
  } catch (error) {
    console.error(error);
  }
}

// add your database adapter fns here
module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  getUserByEmail,
};
