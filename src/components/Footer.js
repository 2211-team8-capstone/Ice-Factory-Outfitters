import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Footer.css";

const Footer = (props) => {
    return (
        <>
            <div className="footer">
                <div className="contact-us">
                    <Link to={"/ContactUs"} className="foot-links">
                        Contact Us
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Footer;