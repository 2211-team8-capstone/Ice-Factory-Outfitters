import React, { useState } from "react";
import {Link} from "react-router-dom";

const Checkout = ({token}) => {


    return (
        <div className="checkout-page-container">
            {token ? (
                <div className="body">
                <div className="cart-products-container">
                  {userCart.map((product) => {
                      return (
                          <div className="cart-single-product" key={product.id}>
                            <div> 
                              <img className="cart-product-thumbnail" src={product.image} />
                            </div>
          
                            <div className="prod-descrip-cont">
                              <h2 className="headers">{product.name}</h2>
                              <h4 className="price">${product.price} ea</h4>
                              <p className="description">{product.description}</p>
                              <div className="button-container">Item quantity
                                <input
                                  className="quantity-field"
                                  min={1}
                                  type="number"
                                  placeholder="quantity"
                                  value={product.quantity}
                                  onChange={async (e) => {
                                    let newQuantity = (e.target.value);
                                    await updateProductQty(newQuantity, product.id, token);
          
                                    if (cartRender) {
                                      setCartRender(false);
                                    } else {
                                      setCartRender(true);
                                    }
                                  }}
                                ></input>
                                <button
                                  className="remove-btn"
                                  onClick={() => handleDelete(product.id)}
                                >
                                  Remove From Cart
                                </button>
                              </div>
                            </div>  
                          </div>
                        
                        );
                      })}
                      </div>
                <div className="order-summary-body">
                  <div className="order-summary-container">
                    <h3 id="ordersumtitle">Order Summary</h3>
                    <div className="order-details">
                      <div className="order-details-name">
                        <p className="item">Order Subtotal:</p>
                        <p className="item">Estimated Shipping:</p>
                        <p className="item">Estimated Tax:</p>
                      </div>
                      <div className="order-details-results">
                        <p className="item">${cartPriceTotal.toFixed(2)}</p>
                        <p className="item">${shippingCost.toFixed(2)}</p>
                        <p className="item">${salesTax.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="order-total-container">
                      <div className="order-total-name">
                        <h3>Order Total: </h3>
                      </div>
                      <h3 className="order-total-result">${orderTotal.toFixed(2)}</h3>
                    </div>
                  </div>
                  <button className="checkout-btn"> CHECKOUT </button>
                </div>
              </div>
            ) : (
                <div>  
                    <div className="login-checkout">
                        <h2>Please log in below to access your cart and start shopping!</h2>
                        <button> Log In </button> 
                    </div>
                    <div className="register-checkout"> 
                        <h4>Don't have an account? <Link to="/LoginRegister">Sign Up </Link></h4>
                    </div>
                </div>
            ) }
        </div>
    )
}

export default Checkout;