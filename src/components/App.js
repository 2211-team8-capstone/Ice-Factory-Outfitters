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
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import Product from "./Product";
import Profile from "./Profile";
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
  const [selectedProduct, setSelectedProduct] = useState([]);

  // console.log("APP.js token", products);

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
            element={
              <Sticks
                products={products}
                setSelectedProduct={setSelectedProduct}
                selectedProduct={selectedProduct}
              />
            }
          ></Route>
          <Route
            path="/pucks"
            element={
              <Pucks
                products={products}
                setSelectedProduct={setSelectedProduct}
                selectedProduct={selectedProduct}
              />
            }
          ></Route>
          <Route
            path="/skates"
            element={
              <Skates
                products={products}
                setSelectedProduct={setSelectedProduct}
                selectedProduct={selectedProduct}
              />
            }
          ></Route>

          <Route
            path="/helmets"
            element={
              <Helmets
                products={products}
                setSelectedProduct={setSelectedProduct}
                selectedProduct={selectedProduct}
              />
            }
          ></Route>
          <Route
            path="/protectiveGear"
            element={
              <ProtectiveGear
                products={products}
                setSelectedProduct={setSelectedProduct}
                selectedProduct={selectedProduct}
              />
            }
          ></Route>
          <Route
            path="/goalieGear"
            element={
              <GoalieGear
                products={products}
                setSelectedProduct={setSelectedProduct}
                selectedProduct={selectedProduct}
              />
            }
          ></Route>
          <Route
            path="/accessories"
            element={
              <Accessories
                products={products}
                setSelectedProduct={setSelectedProduct}
                selectedProduct={selectedProduct}
              />
            }
          ></Route>
          <Route
            path="/teamApparel"
            element={
              <TeamApparel
                products={products}
                setSelectedProduct={setSelectedProduct}
                selectedProduct={selectedProduct}
              />
            }
          ></Route>
          <Route
            path="/LoginRegister"
            element={<LoginRegister setToken={setToken} />}
          ></Route>
          <Route
            path="/Profile"
            element={<Profile setToken={setToken} />}
          ></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
