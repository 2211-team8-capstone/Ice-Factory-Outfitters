const client = require("../client");

async function addProductToCart({ userId, productId }) {
  console.log(
    ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",
    productId
  );
  try {
    const {
      rows: [cart],
    } = await client.query(
      `
      INSERT INTO cart("userId", "productId")
      VALUES ($1, $2)
      RETURNING *;
      `,
      [userId, productId]
    );
    return cart;
  } catch (error) {
    console.error("Error with adding product to cart!", error);
    throw error;
  }
}

async function getCartByUserId(userId) {
  try {
  } catch (error) {
    console.error("Error with getting cart by userId!", error);
    throw error;
  }
}

module.exports = {
  addProductToCart,
  getCartByUserId,
};
