import React, { useEffect, useState } from "react";
import "../style/SingleProduct.css";

const SingleProduct = (props) => {
  // need to pass selectedContact state through props, then pull name, desc, price, image off that selectedContact to render data on the single product view displayed
  const { selectedProduct } = props;
  const { name, description, price, image, id, color, category } =
    selectedProduct;
  const [quantity, setQuantity] = useState(1);

  console.log("DDDDDDDDDDD", quantity);
  console.log("AAAAAAAAAAAAA", props);


  const handleAddToCart = (
    name,
    description,
    price,
    image,
    id,
    color,
    category
  ) => {
    console.log("hello");
    localStorage.setItem(`${name}`, `${name}`);
  };

  return (
    <div className="single-prod">
      <img className="single-prod-image" src={image} />
      <div className="single-prod-info">
        <h1> {name} </h1>
        <h3> About This Item </h3>
        <p>{description}</p>
        <div>
          <p> ${price} </p>
          <div className="btn-container">
            <input
              className="prod-btn"
              min={1}
              type="number"
              placeholder="quantity"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            ></input>
            <button
              type="submit"
              className="add-to-cart-button"
              onClick={() =>
                handleAddToCart(
                  name,
                  description,
                  price,
                  imag,
                  id,
                  color,
                  category
                )
              }
            >
              {" "}
              ADD TO CART{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
