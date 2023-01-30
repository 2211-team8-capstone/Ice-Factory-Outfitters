import React, { useEffect, useState } from "react";

const Cart = (props) => {
  const { userCart, setUserCart } = props;
  
  console.log('this is state of userCart inside cart component',userCart);

  return (

    <div className="all-products">
      {userCart?.map((product) => {
          return (
            <div className="product-container" key={product.id}>
              <div className="single-product">
                <img className="product-thumbnail" src={product.image} />
                <h2 className="headers">{product.name}</h2>
                <h3 className="headers">${product.price}</h3>
                <p className="description">
                  {product.description}
                </p>
              </div>
            </div>
          );
        }
      )}
      <div> TOTAL PRICE: ()
        
      </div>
      <button> CHECKOUT </button>
    </div>
    
  );
};

export default Cart;