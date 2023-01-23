import React from "react";
import "../style/Home.css";
import { Link } from "react-router-dom";


const Home = () => {

  return (
    <>
      <h1 className="welcome">Welcome to Ice Factory Outfitters</h1>
      <div className="all-products-container">
        <h2 className="home-products"><Link to="/sticks">Sticks</Link></h2>
        <h2 className="home-products"><Link to="/pucks">Pucks</Link></h2>
        <h2 className="home-products"><Link to="/skates">Skates</Link></h2>
        <h2 className="home-products"><Link to="/helmets">Helmets</Link></h2>
        <h2 className="home-products"><Link to="/protectiveGear">Protective Gear</Link></h2>
        <h2 className="home-products"><Link to="/goalieGear">Goalie Gear</Link></h2>
        <h2 className="home-products"><Link to="/accessories">Accessories</Link></h2>
        <h2 className="home-products"><Link to="/teamApparel">Team Apparel</Link></h2>
      </div>
    </>
  );
};

export default Home;
