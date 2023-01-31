import React, { useEffect, useState } from "react";
import { deleteProductFromCart } from "../api";

const Cart = (props) => {
  const {
    userCart,
    setUserCart,
    cartPriceTotal,
    setCartPriceTotal,
    token,
    setCartRender,
    cartRender,
  } = props;

  const handleDelete = async (productIdToDelete) => {
    const response = await deleteProductFromCart(productIdToDelete, token);
    // console.log("Cart Delete error?", response);
    if (response && !response.error) {
      if (cartRender) {
        setCartRender(false);
      } else {
        setCartRender(true);
      }
    }
  };

  console.log("usercart CART", userCart);
  return (
    <div className="all-products">
      {userCart.length === 0
        ? ""
        : userCart.map((product) => {
            return (
              <div className="product-container" key={product.id}>
                <div className="single-product">
                  <img className="product-thumbnail" src={product.image} />
                  <h2 className="headers">{product.name}</h2>
                  <h3 className="headers">${product.price}</h3>
                  <p className="description">{product.description}</p>
                  <button
                    className="prod-btn"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}

      <div>TOTAL PRICE: ${cartPriceTotal}</div>
      <button> CHECKOUT </button>
    </div>
  );
};

export default Cart;
