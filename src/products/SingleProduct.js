import React, { useEffect, useState } from "react";
import { addProductToCart } from "../api";
import { editSingleProduct } from "../api/admin";
import { getAllProducts, getSingleProduct } from "../api";
import "../style/SingleProduct.css";
import { async } from "q";

const SingleProduct = (props) => {
  const {
    selectedProduct,
    editSelected,
    token,
    setProducts,
    setEditSelected,
    cartRender,
    setCartRender,
    setSelectedProduct,
  } = props;

  const { name, description, price, image, id, color, category } =
    selectedProduct;

  const [quantity, setQuantity] = useState(1);
  const [productName, setProductName] = useState(`${name}`);
  const [productDesc, setProductDesc] = useState(`${description}`);
  const [productPrice, setProductPrice] = useState(`${price}`);

  const cartId = localStorage.getItem("cart#");

  const handleEditProduct = async (
    productID,
    productName,
    productDesc,
    productPrice
  ) => {
    const response = await editSingleProduct(
      token,
      productID,
      productName,
      productDesc,
      productPrice
    );

    if (response && !response.error) {
      const getProducts = async () => {
        const data = await getAllProducts();
        setProducts(data);

        const getSingleProduct2 = async () => {
          await getSingleProduct(id, setSelectedProduct);
        };
        getSingleProduct2();
      };
      getProducts();
    }
  };

  return (
    <div className="single-prod">
      <img className="single-prod-image" src={image} />
      <div className="single-prod-info">
        {editSelected === false ? (
          <h1> {name} </h1>
        ) : (
          <div>
            <h1> {name} </h1>
            <label htmlFor="productName" className="edit-labels">
              Edit Product Name:
            </label>
            <input
              value={productName}
              type="text"
              onChange={(e) => setProductName(e.target.value)}
            ></input>
          </div>
        )}
        <hr></hr>
        <h2> About This Item </h2>
        {editSelected === false ? (
          <div>
            <p>{description}</p>
            <br></br>
          </div>
        ) : (
          <div>
            <p> {description} </p>
            <label htmlFor="productName" className="edit-labels">
              Edit Product Description:
            </label>
            <input
              value={productDesc}
              type="text"
              onChange={(e) => setProductDesc(e.target.value)}
            ></input>
          </div>
        )}

        {editSelected === false ? (
          <div>
            <h2> ${price} </h2>
            <br></br>
          </div>
        ) : (
          <div>
            <h2> ${price} </h2>
            <label htmlFor="productName" className="edit-labels">
              Edit Product Price:
            </label>
            <input
              value={productPrice}
              type="text"
              onChange={(e) => setProductPrice(e.target.value)}
            ></input>
          </div>
        )}
        {editSelected === false ? (
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
              onClick={() => {
                addProductToCart(id, cartId, quantity, token);
                if (cartRender) {
                  setCartRender(false);
                } else {
                  setCartRender(true);
                }
              }}
            >
              {" "}
              ADD TO CART{" "}
            </button>
          </div>
        ) : (
          <button
            type="submit"
            className="submit-edit-button"
            onClick={() => {
              handleEditProduct(id, productName, productDesc, productPrice);
              setEditSelected(false);
            }}
          >
            Submit Edited Product
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
