const client = require("../client");

async function addProductToCartItems({ cartId, productId, quantity }) {
  // console.log(
  //   ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",
  //   productId);
  try {
    const {
      rows: [cartItems],
    } = await client.query(
      `
      INSERT INTO cartItems("cartId", "productId", quantity)
      VALUES ($1, $2, $3)
      RETURNING *;
      `,
      [cartId, productId, quantity]
    );
    return cartItems;
  } catch (error) {
    console.error("Error with adding product to cartItems!", error);
    throw error;
  }
}

async function getCartItemsByCartId(cartId) {
  try {
    const { rows: [cartItems] } = await client.query(`
    SELECT * FROM cartItems
    WHERE "cartId" = $1;
    `, [cartId]);

    return cartItems;
  } catch (error) {
    console.error("Error with getting cartItems by cartId!", error);
    throw error;
  }
}

async function getCartByUserId(userId) {
  try {
    const { rows: [cart] } = await client.query (`
    SELECT * FROM carts
    WHERE "userId" = $1;
    `, [userId]);

    return cart;
  } catch (error) {
    console.error("Error with getting cart by userId!", error);
    throw error;
  }
}

async function createCarts({userId}) {
  try {
    const { rows: [cart] } = await client.query (`
    INSERT INTO carts ("userId")
    VALUES ($1)
    RETURNING *;
    `, [userId]);

    return cart;
  } catch (error) {
    console.error("Error with creating cart", error);
    throw error;
  }
}

module.exports = {
  addProductToCartItems,
  getCartItemsByCartId,
  getCartByUserId,
  createCarts,
};
