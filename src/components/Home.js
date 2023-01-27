import React from "react";
import "../style/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 className="welcome">Welcome to Ice Factory Outfitters</h1>
      <div className="all-products-container">
        <div className="sticks">
          <h2 className="stick-products">
            <Link to="/sticks">Sticks</Link>
          </h2>
        </div>
        <h2 className="pucks">
          <Link to="/pucks">Pucks</Link>
        </h2>
        <h2 className="skates">
          <Link to="/skates">Skates</Link>
        </h2>
        <h2 className="helmets">
          <Link to="/helmets">Helmets</Link>
        </h2>
        <h2 className="protective-gear">
          <Link to="/protectiveGear">Protective Gear</Link>
        </h2>
        <h2 className="goalie-gear">
          <Link to="/goalieGear">Goalie Gear</Link>
        </h2>
        <h2 className="accessories">
          <Link to="/accessories">Accessories</Link>
        </h2>
        <h2 className="team-apparel">
          <Link to="/teamApparel">Team Apparel</Link>
        </h2>
      </div>
    </>
  );
};

export default Home;
