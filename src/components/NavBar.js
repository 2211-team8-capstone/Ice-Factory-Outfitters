import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/NavBar.css";

const NavBar = (props) => {
  const { setEditSelected, setSelectedProduct } = props;
  const navigate = useNavigate();

  return (
    <>
      <div className="nav-bar-products-container">
        <Link
          to="/sticks"
          className="nav-bar-products"
          onClick={() => {
            setEditSelected(false);
            setSelectedProduct();
          }}
        >
          Sticks
        </Link>

        <Link
          to="/pucks"
          className="nav-bar-products"
          onClick={() => {
            setEditSelected(false);
            setSelectedProduct();
          }}
        >
          Pucks
        </Link>

        <Link
          to="/skates"
          className="nav-bar-products"
          onClick={() => {
            setEditSelected(false);
            setSelectedProduct();
          }}
        >
          Skates
        </Link>
        <Link
          to="/helmets"
          className="nav-bar-products"
          onClick={() => {
            setEditSelected(false);
            setSelectedProduct();
          }}
        >
          Helmets
        </Link>
        <Link
          to="/protectiveGear"
          className="nav-bar-products"
          onClick={() => {
            setEditSelected(false);
            setSelectedProduct();
          }}
        >
          Protective Gear
        </Link>
        <Link
          to="/goalieGear"
          className="nav-bar-products"
          onClick={() => {
            setEditSelected(false);
            setSelectedProduct();
          }}
        >
          Goalie Gear
        </Link>
        <Link
          to="/accessories"
          className="nav-bar-products"
          onClick={() => {
            setEditSelected(false);
            setSelectedProduct();
          }}
        >
          Accessories
        </Link>
        <Link
          to="/teamApparel"
          className="nav-bar-products"
          onClick={() => {
            setEditSelected(false);
            setSelectedProduct();
          }}
        >
          Team Apparel
        </Link>
        <Link
          to="/Search"
          className="nav-bar-products"
          onClick={() => {
            setEditSelected(false);
          }}
        >
          Search
        </Link>
      </div>
    </>
  );
};

export default NavBar;
