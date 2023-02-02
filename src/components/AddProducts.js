import React, { useEffect, useState } from "react";
import "../style/AddProducts.css";
import { createProduct } from "../api";

const AddProducts = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [newProductCategory, setNewProductCategory] = useState("");
  const [newProductName, setNewProductName] = useState("");
  const [newProductDescription, setNewProductDescription] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductSize, setNewProductSize] = useState("");
  const [newProductColor, setNewProductColor] = useState("");
  const [newProductImage, setNewProductImage] = useState("");

  const productToAdd = {
    category: newProductCategory,
    name: newProductName,
    description: newProductDescription,
    price: newProductPrice,
    size: newProductSize,
    color: newProductColor,
    image: newProductImage,
  };

  useEffect(() => {
    const getCategoryList = async () => {
      const categoryList = await getAllCategories();
      setCategoryList(categoryList);
    };

    getCategoryList;
  }, []);

  return (
    <div className="add-products-form">
      <form>
        <div className="add-products-title">
          <h3>Add Products</h3>
        </div>

        <div className="add-products-category">
          <label htmlFor="newProductCateogry">Product Category: </label>
          <select
            id="newProductCategory"
            name="newProductCategory"
            onChange={(event) => setProductsCategory(event.target.value)}
          ></select>
        </div>

        <div className="add-products-name">
          <label htmlFor="newProductName">Product Name: </label>
          <input
            type="text"
            id="newProductName"
            placeholder="Name"
            onChange={(event) => setProductName(event.target.value)}
          ></input>
        </div>

        <div className="add-products-description">
          <label htmlFor="newProductDescription">Product Description: </label>
          <textarea
            id="newProductDescription"
            type="text"
            placeholder="Description"
            onChange={(event) => setProductDescription(event.target.value)}
          ></textarea>
        </div>

        <div className="add-products-price">
          <label htmlFor="newProductPrice">Product Price: </label>
          <input
            type="text"
            placeholder="Price"
            onChange={(event) => setProductPrice(event.target.value)}
          ></input>
        </div>

        <div className="add-products-size">
          <label htmlFor="newProductSize">Product Size: </label>
          <input
            type="text"
            placeholder="Size"
            onChange={(event) => setProductSize(event.target.value)}
          ></input>
        </div>

        <div className="add-products-color">
          <label htmlFor="newProductColor">Product Color: </label>
          <input
            type="text"
            placeholder="Color"
            onChange={(event) => setProductColor(event.target.value)}
          ></input>
        </div>

        <div className="add-products-image">
          <label htmlFor="newProductImage">Product Image: </label>
          <input
            type="text"
            placeholder="Image"
            onChange={(event) => setProductImage(event.target.value)}
          ></input>
        </div>

        <div>
          <button
            className="add-products-add"
            onClick={async (event) => {
              event.preventDefault();
              if (
                productToAdd.name === "" ||
                productToAdd.categoryId === "" ||
                productToAdd.quantity === -1 ||
                productToAdd.price === -1
              ) {
                alert("Please fill out all required fields");
                return;
              }
              //const result = await createProduct(productToAdd);

              if (!result) {
                alert(`Error adding product`);
                return;
              }

              alert(`${productToAdd.name} has been added`);
            }}
            type="button"
            name="add_button"
            value="Submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
