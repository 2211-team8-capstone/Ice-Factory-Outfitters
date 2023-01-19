
const client = require("./client");



async function testDB() {
  try {
    // connect the client to the database, finally
    client.connect();

    // queries are promises, so we can await them
    const {rows} = await client.query(`SELECT * FROM users;`);

    // for now, logging is a fine way to see what's up
    console.log(rows);
  } catch (error) {
    console.error(error);
  } finally {
    // it's important to close out the client connection
    client.end();
  }
}

testDB();



// async function buildTables() {
//   try {
//     client.connect();

//     // drop tables in correct order

//     // build tables in correct order
//   } catch (error) {
//     throw error;
//   }
// }

// async function populateInitialData() {
//   try {
//     // create useful starting data by leveraging your
//     // Model.method() adapters to seed your db, for example:
//     // const user1 = await User.createUser({ ...user info goes here... })
//   } catch (error) {
//     throw error;
//   }
// }

// buildTables()
//   .then(populateInitialData)
//   .catch(console.error)
//   .finally(() => client.end());
