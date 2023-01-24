import React from "react";
import "../style/Products.css";
import { getAllProducts } from "../api";

const ProtectiveGear = (props) => {

    const filteredProducts = props.products.filter((_product) =>
    _product.category.includes("Protective Gear")
  );

    return (
        <div className="all-products">
            {filteredProducts.map((product) => {
                return (
                    <div key={product.id} className="single-product">
                        <div className="image">"image here"</div>
                        <h2 >{product.name}</h2>
                        <h3>${product.price}</h3>
                        <button>More Info</button>
                    </div>)
            })}
        </div>
    )
}

export default ProtectiveGear;