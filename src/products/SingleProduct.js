import React from "react";

const SingleProduct = (props) => {
    console.log(props);
// need to pass selectedContact state through props, then pull name, desc, price, image off that selectedContact to render data on the single product view displayed
    // const { selectedContact } = props;
    // const {name, description, price, image } = selectedContact;

    return (
        <div>
            <h1> NAME </h1>
            <div>
                IMAGE
            </div>
            <h3> About This Item </h3>
            <p>DESCRIPTION</p>
            <div>
                <p> $$$$$ </p>
                {/* <input> Quantity </input> */}
                <button> ADD TO CART </button>
            </div>

        </div>
    )
}

export default SingleProduct 