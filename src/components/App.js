import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// getAPIHealth is defined in our axios-services directory index.js
// you can think of that directory as a collection of api adapters
// where each adapter fetches specific info from our express server's /api route
import { getAllProducts, getAPIHealth } from "../api";
import LoginRegister from "./LoginRegister";
import Home from "./Home";
import Header from "./Header";
import NavBar from "./NavBar";
import Product from "./Product";
import "../style/App.css";
import Sticks from "../products/Sticks";
import Skates from "../products/Skates";
import Helmets from "../products/Helmets";
import Pucks from "../products/Pucks";
import ProtectiveGear from "../products/ProtectiveGear";
import GoalieGear from "../products/GoalieGear";
import Accessories from "../products/Accessories";
import TeamApparel from "../products/TeamApparel";

const App = () => {
  const [APIHealth, setAPIHealth] = useState("");
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);

  console.log("APP.js token", products);

  useEffect(() => {
    // const result = await getAllProducts
    getAllProducts(setProducts);
    // const getAPIStatus = async () => {
    //   const { healthy } = await getAPIHealth();
    //   setAPIHealth(healthy ? "api is up! :D" : "api is down :/");
    // };
    // getAPIStatus();
  }, []);

  return (
    <>
      <Header setToken={setToken} token={token} />
      <NavBar />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            path="/sticks"
            element={<Sticks products={products} />}
          ></Route>
          <Route path="/pucks" element={<Pucks />}></Route>
          <Route path="/skates" element={<Skates />}></Route>
          <Route path="/helmets" element={<Helmets />}></Route>
          <Route path="/protectiveGear" element={<ProtectiveGear />}></Route>
          <Route path="/goalieGear" element={<GoalieGear />}></Route>
          <Route path="/accessories" element={<Accessories />}></Route>
          <Route path="/teamApparel" element={<TeamApparel />}></Route>
          <Route
            path="/LoginRegister"
            element={<LoginRegister setToken={setToken} />}
          ></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
