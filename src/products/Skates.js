import React from "react";
import "../style/Products.css";
import { getAllProducts } from "../api";

const Skates = (props) => {

    const filteredProducts = props.products.filter((_product) =>
    _product.category.includes("Skates")
  );

    return (
        <div className="all-products">
            {filteredProducts.map((product) => {
                return (
                    <div key={product.id} className="single-product">
                        <h2 >{product.name}</h2>
                        <img src={product.image}/>
                        <h3>${product.price}</h3>
                        <button>More Info</button>
                    </div>)
            })}
        </div>
    )
}

export default Skates;
