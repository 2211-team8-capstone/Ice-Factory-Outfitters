const client = require("../client");

async function createProduct({ category, name, description, price, quantity, size, color, image }) {
    try {
        const { rows: [ product ]} = await client.query(`
        INSERT INTO products(category, name, description, price, quantity, size, color, image)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8)
        ON CONFLICT (name) DO NOTHING
        RETURNING *;
        `, [category, name, description, price, quantity, size, color, image]);

        return product
    } catch (error) {
        throw error;
    }
}

async function getAllProducts() {
    const { rows } = await client.query(`
      SELECT *
      FROM products;
    `);
  
    return rows;
  }


module.exports = {
    createProduct,
    getAllProducts,
}