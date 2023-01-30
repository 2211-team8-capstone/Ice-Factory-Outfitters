// grab our db client connection to use with our adapters
const client = require("../client");
const bcrypt = require("bcrypt");
const SALT_COUNT = 10;

async function createAdmin({
    email,
    password
}) {
    const hashedAdminPassword = await bcrypt.hash(adminPassword, SALT_COUNT);

    try {
        const {
            rows: [admin],
        } = await client.query(
            `
    INSERT INTO admin(
      email, 
      password)
    VALUES ($1, $2)
    ON CONFLICT (email) DO NOTHING
    RETURNING *;
    `,
            [adminEmail,
                hashedAdminPassword]
        );

        delete admin.password;

        return admin;
    } catch (error) {
        console.error("Error creating admin!");
        throw error;
    }
}

async function getAllAdmins() {
    const { rows } = await client.query(`
    SELECT email, password
    FROM admin;
  `);

    return rows;
}

async function getAdminById(adminId) {
    try {
        const {
            rows: [admin],
        } = await client.query(
            `
        SELECT *
        FROM admin
        WHERE id=$1;
    `,
            [adminId]
        );

        // dont return password with user data
        delete admin.password;

        return admin;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getAdminByEmail(adminEmail) {
    try {
        const {
            rows: [admin],
        } = await client.query(
            `
      SELECT * 
      FROM admin
      WHERE email=$1;
    `,
            [adminEmail]
        );

        return admin;
    } catch (error) {
        console.error(error);
    }
}

// add your database adapter fns here
module.exports = {
    getAllAdmins,
    createAdmin,
    getAdminById,
    getAdminByEmail,
};
