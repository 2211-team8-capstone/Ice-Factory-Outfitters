import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";

const Header = (props) => {
  const handleLogout = () => {
    localStorage.clear();
    props.setToken("");
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to={"/"} className="head-links">
            <img src="https://res.cloudinary.com/dulsfxtjz/image/upload/v1674588307/Ice%20Factory%20Outfitters/images_wzlgn3.png"/>
          </Link>
        </div>
        <h2 className="delete-later">Ice Factory Outfitters</h2>
        <div className="login-cart"></div>
        {!props.token ? (
          <div className="register-login">
            <Link to={"/LoginRegister"} className="head-links">
              Login/Register
            </Link>
          </div>
        ) : (
          <div className="logout" onClick={handleLogout}>
            <Link to={"/"} className="head-links">
              Logout
            </Link>
          </div>
        )}
        <div className="cart">
          <Link to={"/cart"} className="head-links">
            Cart
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
