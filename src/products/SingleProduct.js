import React from "react";
import "../style/SingleProduct.css";

const SingleProduct = (props) => {
    
// need to pass selectedContact state through props, then pull name, desc, price, image off that selectedContact to render data on the single product view displayed
    const { selectedProduct } = props;
    const {name, description, price, image } = selectedProduct;

    return (
        <div className="single-prod">
            <div>
                IMAGE
            </div>
            <h1> {name} </h1>
            <h3> About This Item </h3>
            <p>{description}</p>
            <div>
                <p> ${price} </p>
                {/* <input> Quantity </input> */}
                <button> ADD TO CART </button>
            </div>

        </div>
    )
}

export default SingleProduct 