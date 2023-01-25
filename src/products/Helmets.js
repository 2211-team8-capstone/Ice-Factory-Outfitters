import React, { useEffect } from "react";
import "../style/Products.css";
import { getAllProducts, getSingleProduct } from "../api";
import SingleProduct from "./SingleProduct";

const Helmets = (props) => {
    const {setSelectedProduct, selectedProduct} = props;
    
    useEffect(() => {
            setSelectedProduct(0);
        }, [])
    
    const filteredProducts = props.products.filter((_product) =>
    _product.category.includes("Helmets")
  );

    return (
        <div className="all-products">
            {selectedProduct ? <SingleProduct selectedProduct={selectedProduct}/> 
            : 
            filteredProducts.map((product) => {
                return (
                    <div key={product.id} className="single-product">
                        <h2 >{product.name}</h2>
                        <img src={product.image}/>
                        <h3>${product.price}</h3>
                        <button onClick={() => getSingleProduct(product.id, setSelectedProduct)}>More Info</button>
                    </div>)
            })}
        </div>
    )
}

export default Helmets;