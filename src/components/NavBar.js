import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/NavBar.css";

const NavBar = () => {
  const routeTo = () => {};

  return (
    <>
      <div className="nav-bar-products-container">
        <h2 className="nav-bar-products">
          <Link to="/sticks">Sticks</Link>
        </h2>
        <h2 className="nav-bar-products">
          <Link to="/pucks">Pucks</Link>
        </h2>
        <h2 className="nav-bar-products">
          <Link to="/skates">Skates</Link>
        </h2>
        <h2 className="nav-bar-products">
          <Link to="/helmets">Helmets</Link>
        </h2>
        <h2 className="nav-bar-products">
          <Link to="/protectiveGear">Pretective Gear</Link>
        </h2>
        <h2 className="nav-bar-products">
          <Link to="/goalieGear">Goalie Gear</Link>
        </h2>
        <h2 className="nav-bar-products">
          <Link to="/accessories">Accessories</Link>
        </h2>
        <h2 className="nav-bar-products">
          <Link to="/teamApparel">Team Apparel</Link>
        </h2>
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
