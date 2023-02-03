import React, { useEffect, useState } from "react";
import { addProductToCart } from "../api";
import { editSingleProduct } from "../api/admin";
import { getAllProducts, getSingleProduct } from "../api";
import "../style/SingleProduct.css";
import { async } from "q";

const SingleProduct = (props) => {
  // need to pass selectedContact state through props, then pull name, desc, price, image off that selectedContact to render data on the single product view displayed
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

  console.log("single product edit", editSelected, productName);

  const cartId = localStorage.getItem("cart#");
  console.log("this is cartId from localStorage in singleProdcut comp", cartId);
  console.log(id);

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
    console.log("singleproduct handleEdit error?", response);

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
            <label htmlFor="productName">Edit Product Name:</label>
            <input
              value={productName}
              type="text"
              onChange={(e) => setProductName(e.target.value)}
            ></input>
          </div>
        )}
        <h3> About This Item </h3>
        {editSelected === false ? (
          <div>
            <p>{description}</p>
            <br></br>
          </div>
        ) : (
          <div>
            <p> {description} </p>
            <label htmlFor="productName">Edit Product Description:</label>
            <input
              value={productDesc}
              type="text"
              onChange={(e) => setProductDesc(e.target.value)}
            ></input>
          </div>
        )}

        {editSelected === false ? (
          <div>
            <p> ${price} </p>
            <br></br>
          </div>
        ) : (
          <div>
            <p> ${price} </p>
            <label htmlFor="productName">Edit Product Price:</label>
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
            className="add-to-cart-button"
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
