// grab our db client connection to use with our adapters
const client = require('../client');
const bcrypt = require('bcrypt');


async function createUser ({email, password}) {
  const SALT_COUNT = 10;

  const hashedPassword = await bcrypt.hash(password, SALT_COUNT)

  try {
    const [rows] = await client.query(`
    INSERT INTO users(email, password)
    VALUES ($1, $2)
    ON CONFLICT (email) DO NOTHING
    RETURNING *;
    `, [email, hashedPassword]);

    delete password;

    return rows;
  } catch (error) {
    console.error(error);
  }
}

async function getAllUsers() {
  const {rows} = await client.query(`
    SELECT email, password
    FROM users;
  `);

  return rows;
}



  // add your database adapter fns here
module.exports = {
  getAllUsers,
  createUser
};


