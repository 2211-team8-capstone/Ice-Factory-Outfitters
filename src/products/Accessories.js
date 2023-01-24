import React, { useEffect } from "react";
import "../style/Products.css";
import { getAllProducts, getSingleProduct } from "../api";
import SingleProduct from "./SingleProduct";

const Accessories = (props) => {
    const {setSelectedProduct, selectedProduct} = props;
    
    // const [useEffectSetter, setUseEffectSetter] = useState(false)

    useEffect(() => {
            setSelectedProduct(0);
        }, [])
    
        
    
    const filteredProducts = props.products.filter((_product) =>
    _product.category.includes("Accessories")
  );

  console.log(selectedProduct);

    return (
        <div className="all-products">
            {selectedProduct ? <SingleProduct /> 
            : 
            filteredProducts.map((product) => {
                return (
                    <div key={product.id} className="single-product">
                        <h2 >{product.name}</h2>
                        <img src={product.image} />
                        <h3>${product.price}</h3>
                        {/* onclick we want to run the API call getSingleProduct, which will grab product and set the selectedProduct state */}
                        <button onClick={() => getSingleProduct(product.id, setSelectedProduct)}>More Info</button>
                    </div>)
            })
            }
        
        </div>
    )
}

export default Accessories;