import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/NavBar.css";

const NavBar = (props) => {
  const { setEditSelected } = props;

  return (
    <>
      <div className="nav-bar-products-container">
        <Link
          to="/sticks"
          className="nav-bar-products"
          onClick={() => {
            setEditSelected(false);
          }}
        >
          Sticks
        </Link>

        <Link
          to="/pucks"
          className="nav-bar-products"
          onClick={() => {
            setEditSelected(false);
          }}
        >
          Pucks
        </Link>

        <Link
          to="/skates"
          className="nav-bar-products"
          onClick={() => {
            setEditSelected(false);
          }}
        >
          Skates
        </Link>
        <Link
          to="/helmets"
          className="nav-bar-products"
          onClick={() => {
            setEditSelected(false);
          }}
        >
          Helmets
        </Link>
        <Link
          to="/protectiveGear"
          className="nav-bar-products"
          onClick={() => {
            setEditSelected(false);
          }}
        >
          Protective Gear
        </Link>
        <Link
          to="/goalieGear"
          className="nav-bar-products"
          onClick={() => {
            setEditSelected(false);
          }}
        >
          Goalie Gear
        </Link>
        <Link
          to="/accessories"
          className="nav-bar-products"
          onClick={() => {
            setEditSelected(false);
          }}
        >
          Accessories
        </Link>
        <Link
          to="/teamApparel"
          className="nav-bar-products"
          onClick={() => {
            setEditSelected(false);
          }}
        >
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
