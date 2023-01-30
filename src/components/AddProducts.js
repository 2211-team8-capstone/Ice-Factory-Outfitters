import React from "react";
import "../style/AddProducts.css";

const AddProducts = () => {

    return (
        <div className="add-products-form">

            <form>
                <div className='add-products-title'>
                    <h3>Add Products</h3>
                </div>

                <div className='add-products-category'>
                    <label>Product Category: </label>
                    <input
                        type="text"
                        placeholder="Category"
                        onChange={(event) => setProductsCategory(event.target.value)}
                    ></input>
                </div>

                <div className='add-products-name'>
                    <label>Product Name: </label>
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={(event) => setProductName(event.target.value)}
                    ></input>
                </div>

                <div className='add-products-description'>
                    <label>Product Description: </label>
                    <textarea
                        id='input-product-description'
                        type="text"
                        placeholder="Description"
                        onChange={(event) => setProductDescription(event.target.value)}
                    ></textarea>
                </div>

                <div className='add-products-price'>
                    <label>Product Price: </label>
                    <input
                        type="text"
                        placeholder="Price"
                        onChange={(event) => setProductPrice(event.target.value)}
                    ></input>
                </div>

                <div className='add-products-size'>
                    <label>Product Size: </label>
                    <input
                        type="text"
                        placeholder="Size"
                        onChange={(event) => setProductSize(event.target.value)}
                    ></input>
                </div>

                <div className='add-products-color'>
                    <label>Product Color: </label>
                    <input
                        type="text"
                        placeholder="Color"
                        onChange={(event) => setProductColor(event.target.value)}
                    ></input>
                </div>

                <div className='add-products-image'>
                    <label>Product Image: </label>
                    <input
                        type="text"
                        placeholder="Image"
                        onChange={(event) => setProductImage(event.target.value)}
                    ></input>
                </div>

                <div>
                    <button
                        className='add-products-add'
                        onClick={() => {
                            submitNewProduct();
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
    )
}

export default AddProducts;