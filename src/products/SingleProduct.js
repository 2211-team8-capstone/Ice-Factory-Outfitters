import React, { useEffect, useState } from "react";
import "../style/SingleProduct.css";

const SingleProduct = (props) => {
  // need to pass selectedContact state through props, then pull name, desc, price, image off that selectedContact to render data on the single product view displayed
  const { selectedProduct } = props;
  const { name, description, price, image, id, color, category } =
    selectedProduct;
  const [quantity, setQuantity] = useState(1);

  console.log("DDDDDDDDDDD", quantity);
  console.log("AAAAAAAAAAAAA", selectedProduct);

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

    // localStorage.setItem(
    //   `Product#${id}`,
    //   JSON.stringify(selectedProduct, `"QUAntity": ${quantity}`)
    // );
  };

  return (
    <div className="single-prod">
      <img className="single-prod-image" src={image} />
      <div className="single-prod-info">
        <h1> {name} </h1>
        <h3> About This Item </h3>
        <p>{description}</p>
        <br></br>
        <div>
          <p> ${price} </p>
          <br></br>
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
                  image,
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
