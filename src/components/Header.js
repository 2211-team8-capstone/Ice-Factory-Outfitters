import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to={"/"}>LOGO</Link>
        </div>
        <div className="login-cart"></div>
        <div className="register-login">
          <Link to={"/login"}>Login/Register</Link>
        </div>
        <div className="cart">
          <Link to={"/cart"}>Cart</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
