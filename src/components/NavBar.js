import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/NavBar.css";

const NavBar = () => {
  const routeTo = () => { };

  return (
    <>
      <div className="nav-bar-products-container">
        <Link to="/sticks" className="nav-bar-products">
          Sticks
        </Link>

        <Link to="/pucks" className="nav-bar-products">
          Pucks
        </Link>

        <Link to="/skates" className="nav-bar-products">
          Skates
        </Link>
        <Link to="/helmets" className="nav-bar-products">
          Helmets
        </Link>
        <Link to="/protectiveGear" className="nav-bar-products">
          Protective Gear
        </Link>
        <Link to="/goalieGear" className="nav-bar-products">
          Goalie Gear
        </Link>
        <Link to="/accessories" className="nav-bar-products">
          Accessories
        </Link>
        <Link to="/teamApparel" className="nav-bar-products">
          Team Apparel
        </Link>
      </div>
      {/* <div className="search-bar">
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
      </div> */}
    </>
  );
};

export default NavBar;
