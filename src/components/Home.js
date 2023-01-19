import React from "react";
import "../style/Home.css";

const Home = () => {
  return (
    <>
      <h1 className="welcome">Welcome to Ice Factory Outfitters</h1>
      <div className="all-products-container">
        <h2 className="home-products">Sticks</h2>
        <h2 className="home-products">Pucks</h2>
        <h2 className="home-products">Skates</h2>
        <h2 className="home-products">Helmets</h2>
        <h2 className="home-products">Protective Gear</h2>
        <h2 className="home-products">Goalie Gear</h2>
        <h2 className="home-products">Accessories</h2>
        <h2 className="home-products">Team Apparel</h2>
      </div>
    </>
  );
};

export default Home;
