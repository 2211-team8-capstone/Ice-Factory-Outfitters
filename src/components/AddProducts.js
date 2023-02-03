import React, { useEffect, useState } from "react";
import "../style/AddProducts.css";
import { createProduct, getAllProducts } from "../api";

const AddProducts = (props) => {
  const { setProducts } = props;

  const [categoryList, setCategoryList] = useState([
    "Sticks",
    "Pucks",
    "Skates",
    "Helmets",
    "Protective Gear",
    "Goalie Gear",
    "Accessories",
    "Team Apparel",
  ]);
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

  //   useEffect(() => {
  //     const getCategoryList = async () => {
  //       const categoryList = await getAllCategories();
  //       setCategoryList(categoryList);
  //     };

  //     getCategoryList;
  //   }, []);

  return (
    <div className="add-products-form">
      <form>
        <div className="add-products-title">
          <h3>Add New Products</h3>
        </div>
        <div className="add-products-category">
          <label htmlFor="newProductCateogry">Product Category: </label>
          <select
            id="newProductCategory"
            name="newProductCategory"
            required
            onChange={(event) => {
              setNewProductCategory(event.target.value);
            }}
          >
            <option value="">-- Select Product Category --</option>
            {categoryList.map((product, index) => (
              <option key={index} value={product}>
                {product}
              </option>
            ))}
          </select>
        </div>

        <div className="add-products-name">
          <label htmlFor="newProductName">Product Name: </label>
          <input
            type="text"
            id="newProductName"
            name="newProductName"
            placeholder="Name"
            required
            onChange={(event) => setNewProductName(event.target.value)}
          ></input>
        </div>

        <div className="add-products-description">
          <label htmlFor="newProductDescription">Product Description: </label>
          <textarea
            type="text"
            id="newProductDescription"
            name="newProductDescription"
            placeholder="Description"
            required
            onChange={(event) => setNewProductDescription(event.target.value)}
          ></textarea>
        </div>

        <div className="add-products-price">
          <label htmlFor="newProductPrice">Product Price: </label>
          <input
            type="text"
            id="newProductPrice"
            name="newProductPrice"
            placeholder="Price"
            required
            onChange={(event) => setNewProductPrice(event.target.value)}
          ></input>
        </div>

        <div className="add-products-size">
          <label htmlFor="newProductSize">Product Size: </label>
          <input
            type="text"
            id="newProductSize"
            name="newProductSize"
            placeholder="Size"
            required
            onChange={(event) => setNewProductSize(event.target.value)}
          ></input>
        </div>

        <div className="add-products-color">
          <label htmlFor="newProductColor">Product Color: </label>
          <input
            type="text"
            id="newProductColor"
            name="newProductColor"
            placeholder="Color"
            required
            onChange={(event) => setNewProductColor(event.target.value)}
          ></input>
        </div>

        <div className="add-products-image">
          <label htmlFor="newProductImage">Product Image URL: </label>
          <input
            type="text"
            id="newProductImage"
            name="newProductImage"
            placeholder="Image"
            onChange={(event) => setNewProductImage(event.target.value)}
          ></input>
        </div>

        <div>
          <button
            className="add-products-add"
            onClick={async (event) => {
              event.preventDefault();
              if (productToAdd.name === "" || productToAdd.price === -1) {
                alert("Please fill out all required fields");
                return;
              }
              const result = await createProduct(productToAdd);

              if (!result) {
                alert(`Error adding product`);
                return;
              }
              const getProducts = async () => {
                const data = await getAllProducts();
                setProducts(data);
                alert(`${productToAdd.name} has been added`);
              };
              getProducts();
            }}
            type="button"
            name="add_button"
            value="Submit"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
