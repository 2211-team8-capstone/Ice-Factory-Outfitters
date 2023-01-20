
const client = require("./client");
const { getAllUsers, createUser } = require("./models/users");


async function dropTables() {
  try {
  console.log('starting to drop tables....')

    await client.query(`
    DROP TABLE users;
    `)

    console.log('completed dropping tables!')
  } catch (error) {
    console.error(error)
  }
}

async function createTables() {
  try {
    console.log('starting to create tables....')


    await client.query(`
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    );
    `);
    
    console.log('finished creating tables!');
  } catch (error) {
    console.error(error)
  }
}

async function createInitialUsers() {
  const kevin = await createUser({email: 'kevin@email.com', password: 'password1'});
  const jae = await createUser({email: 'jae@email.com', password: 'password12'});
  const thomas = await createUser({email: 'thomas@email.com', password: 'password123'});
  const dylan = await createUser({email: 'dylan@email.com', password: 'password1234'});

}

async function rebuildDB() {
  try {
    client.connect();

    await dropTables();
    await createTables();
    await createInitialUsers();

  } catch (error) {
    console.error(error)
  }
}

async function testDB() {
  try {
    console.log('starting to test the database....')
   
   const users = await getAllUsers();
   console.log('this is getAllUsers-------->', users);
   
   console.log('finsihed testing the database!')
  } catch (error) {
    console.error(error);
  }
}

rebuildDB()
  .then(testDB)
  .catch(console.error)
  .finally(() => client.end());



