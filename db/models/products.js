const client = require("../client");

async function createProduct(product) {
  try {
    const { category, name, description, price, quantity, size, color, image } =
      product;

    const {
      rows: [newProduct],
    } = await client.query(
      `
        INSERT INTO products(category, name, description, price, quantity, size, color, image)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8)
        ON CONFLICT (name) DO NOTHING
        RETURNING *;
        `,
      [category, name, description, price, quantity, size, color, image]
    );

    return newProduct;
  } catch (error) {
    throw error;
  }
}

async function getAllProducts() {
  try {
    const { rows } = await client.query(`
        SELECT *
        FROM products;
      `);

    return rows;
  } catch (error) {
    throw error;
  }
}

async function getProductByName(name) {
  try {
    const {
      rows: [product],
    } = await client.query(
      `
      SELECT * 
      FROM products
      WHERE name=$1;
      `,
      [name]
    );
    return product;
  } catch (error) {
    console.error("Error getting Product by Name");
  }
}

async function getProductById(productId) {
  try {
    const {
      rows: [product],
    } = await client.query(
      `
      SELECT *
      FROM products
      WHERE id=$1;
    `,
      [productId]
    );
    if (!product) {
      throw {
        name: "ProductNotFoundError",
        message: "Could not find a product with that productId",
      };
    }

    return product;
  } catch (error) {
    throw error;
  }
}

async function destroyProduct(id) {
  try {
    const {
      rows: [product],
    } = await client.query(
      `
      DELETE 
      FROM products
      WHERE id=${id}
      RETURNING *
    `
    );

    return product;
  } catch (error) {
    console.error("Error deleting product");
    throw error;
  }
}

async function updateProduct({ productid, ...fields }) {
  const setString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 1}`)
    .join(", ");
  if (setString.length === 0) {
    return;
  }
  try {
    const {
      rows: [products],
    } = await client.query(
      `
    UPDATE products
    SET ${setString}
    WHERE id=${productid}
    RETURNING *;
    `,
      Object.values(fields)
    );
    return products;
  } catch (error) {
    console.error("Error updating product");
    throw error;
  }
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  destroyProduct,
  updateProduct,
  getProductByName,
};
