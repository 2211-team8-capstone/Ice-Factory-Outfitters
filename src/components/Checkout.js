import React from "react";
import { useNavigate} from "react-router-dom";
import "../style/Checkout.css";

const Checkout = ({token, userCart, setUserCart}) => {
const navigate = useNavigate();

    return (
        <div className="checkout-page-container">
            {token ? (
                <div className="body-checkout">
                  <div className="order-review-container">
                    <h3> Review Order </h3>
                      {userCart.map((product) => {
                      return (
                          <div className="cart-single-product" key={product.id}>
                            <div> 
                              <img className="cart-product-thumbnail" src={product.image} />
                            </div>
          
                            <div className="prod-descrip-cont">
                              <h2 className="headers">{product.name}</h2>
                              <h4 className="price">${product.price} ea</h4>
                              <p className="description">{product.description}</p>
                            </div>
                          </div>
                      )}
                    )}
                  </div>
                  
                  <div className="payment-review-container">
                    <h3> Review Payment Method</h3>
                   
                    <form onSubmit={()=>{
                      alert("Order submitted. A confirmation and receipt will be sent to your email address. Thank you for your business!");
                      setUserCart([]);
                      navigate('/');
                    }}>
                      <input type="text" placeholder="Credit/Debit Card Number" required></input>
                      <input type="text" placeholder="Exp. MM/YY" required></input>
                      <input type="text" placeholder="CVV" required></input>

                    <h3> Review Shipping Info </h3>
                      <input type="text" placeholder="Street Address:" required></input>
                      <input type="text" placeholder="Apt, Suite, etc (optional)"></input>
                      <input type="text" placeholder="City" required></input>
                      <input type="text" placeholder="State" required></input>
                      <input type="text" placeholder="Zip Code" required></input>
                      <input type="submit" value="Confirm Order and Payment"></input>
                    </form>
                  </div>
                </div>
            ) : (
                <div>  
                    user is not logged in
                </div>
            ) }
        </div>
    )
}

export default Checkout;