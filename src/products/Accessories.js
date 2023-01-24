import React from "react";
import "../style/Products.css";
import { getAllProducts, getSingleProduct } from "../api";

const Accessories = (props) => {
    const filteredProducts = props.products.filter((_product) =>
    _product.category.includes("Accessories")
  );

    return (
        <div className="all-products">
            {filteredProducts.map((product) => {
                return (
                    <div key={product.id} className="single-product">
                        <div className="image">"image here"</div>
                        <h2 >{product.name}</h2>
                        <h3>${product.price}</h3>
                        {/* onclick we want to run the API call getSingleProduct, which will grab product and set the selectedProduct state */}
                        <button onClick={() => getSingleProduct(product.id)}>More Info</button>
                    </div>)
            })}
        </div>
    )
}

export default Accessories;