// grab our db client connection to use with our adapters
const client = require("../client");
const bcrypt = require("bcrypt");
const SALT_COUNT = 10;

async function createUser({ 
  email, 
  password,
  phone,
  firstName,
  lastName,
  addressNum,
  addressSt,
  city,
  state,
  zip,
  }) {
  const hashedPassword = await bcrypt.hash(password, SALT_COUNT);

  try {
    const {
      rows: [user],
    } = await client.query(
      `
    INSERT INTO users(
      email, 
      password, 
      phone, 
      firstName, 
      lastName, 
      addressNum, 
      addressSt, 
      city, 
      state, 
      zip)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    ON CONFLICT (email) DO NOTHING
    RETURNING *;
    `,
      [email, 
        hashedPassword, 
        phone, 
        firstName, 
        lastName, 
        addressNum, 
        addressSt, 
        city, 
        state, 
        zip]
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

async function getUser({ email, password }) {
  const getUser = await getUserByEmail(email);
  if (getUser.password === password) {
    try {
      const { rows: [user] } = await client.query (`
      SELECT id, email FROM users
      WHERE email = $1
      `, [email]);

      return user;
    } catch (error) {
      console.error(error);
    }
  } 
}

async function updateUser({ userid, ...fields }) {
  const setString = Object.keys(fields)
  .map((key, index) => `"${key}"=$${index + 1}`)
  .join(", ");
if (setString.length === 0) {
  return;
}
try {
  const { rows: [users] } = await client.query(`
  UPDATE users
  SET ${setString}
  WHERE id=${userid}
  RETURNING *;
  `, Object.values(fields)
  );
console.log("USERS DB users", users)
  return users;
} catch (error) {
  console.error("Error updating user profile");
}
}

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  getUserByEmail,
  getUser,
  updateUser,
};
