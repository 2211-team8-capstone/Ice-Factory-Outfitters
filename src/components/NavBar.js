import React, { useState, useEffect } from "react";
import "../style/NavBar.css";

const NavBar = () => {
  const routeTo = () => {};

  return (
    <>
      <div className="nav-bar-products-container">
        <div>
          <button className="nav-bar-products" onClick={routeTo}>
            Sticks
          </button>
        </div>
        <h2 className="nav-bar-products">Sticks</h2>
        <h2 className="nav-bar-products">Pucks</h2>
        <h2 className="nav-bar-products">Skates</h2>
        <h2 className="nav-bar-products">Helmets</h2>
        <h2 className="nav-bar-products">Protective Gear</h2>
        <h2 className="nav-bar-products">Goalie Gear</h2>
        <h2 className="nav-bar-products">Accessories</h2>
        <h2 className="nav-bar-products">Team Apparel</h2>
      </div>
      <div className="search-bar">
        <form>
          <input
            type="search"
            name="search"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="search-button"
            onClick={(e) => {
              handleSearch(e);
            }}
          >
            Search for Products
          </button>
        </form>
      </div>
    </>
  );
};

export default NavBar;
