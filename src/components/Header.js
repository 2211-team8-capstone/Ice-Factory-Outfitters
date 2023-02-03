import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Header.css";

const Header = (props) => {
  const {
    setUserCart,
    setAdminAccess,
    onSubmit
  } = props;
  const handleLogout = () => {
    localStorage.clear();
    props.setToken("");
    setUserCart([]);
    setAdminAccess(false);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to={"/"} className="head-links">
            <img src="https://res.cloudinary.com/dulsfxtjz/image/upload/v1674588307/Ice%20Factory%20Outfitters/images_wzlgn3.png" />
          </Link>
        </div>
        {/* <h2 className="delete-later">Ice Factory Outfitters</h2> */}

        {/* <div className="search-bar">
          <form
            action="/"
            method="get"
            autoComplete="off"
            onSubmit={async (e) => {
              navigate.push(`?s=${searchQuery}`);
              e.preventDefault();
              onSubmit(e);
            }}>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              name="header-search"
              id="header-search"
              placeholder="Search the Factory"
            />
            <button
              type="submit"
              className="search-button"
              onClick={(e) => {
                handleSearch(e);
              }}
            >
              Search
            </button>
          </form>
        </div> */}



        <div className="login-cart"></div>
        {!props.token ? (
          <div className="register-login">
            <i className="fa-solid fa-user"></i>
            <Link to={"/LoginRegister"} className="head-links">
              Login/Register
            </Link>
          </div>
        ) : (
          <div className="logged-in">
            <div className="profile">
              <Link to={"/profile"} className="head-links">
                My Profile
              </Link>
            </div>

            <div className="logout" onClick={handleLogout}>
              <Link to={"/"} className="head-links">
                Logout
              </Link>
            </div>
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
