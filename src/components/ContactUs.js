import React from "react";
import "../style/ContactUs.css";
import { getAllProducts } from "../api";

const ContactUs = () => {

    return (
        <div className="contact-forms">
            <form>
                <div className='contact-first-name'>
                    <label>First Name: </label>
                    <input
                        type="text"
                        placeholder="First Name"
                        onChange={(event) => setFirstName(event.target.value)}
                    ></input>
                </div>

                <label>Last Name: </label>
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={(event) => setLastName(event.target.value)}
                ></input>
            </form>
        </div>
    )
}

export default ContactUs;