import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Footer.css";

const Footer = (props) => {
  const { setAdminAccess } = props;
  const handleLogout = () => {
    localStorage.clear();
    props.setToken("");
    setAdminAccess(false);
  };

  //   console.log("footer", props);

  return (
    <>
      <div className="footer">
        <div className="contact-us">
          <Link to={"/ContactUs"} className="foot-links">
            Contact Us
          </Link>
        </div>

        {!props.token ? (
          <div className="admin-login-form">
            <i className="fa-solid fa-user"></i>
            <Link to={"/AdminLogin"} className="foot-links">
              Admin Login
            </Link>
          </div>
        ) : (
          <div className="admin-logged-in">
            <div className="admin-page">
              <Link to={"/Admin"} className="foot-links">
                Admin
              </Link>
            </div>

            <div className="admin-logout" onClick={handleLogout}>
              <Link to={"/"} className="foot-links">
                Admin Logout
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Footer;
