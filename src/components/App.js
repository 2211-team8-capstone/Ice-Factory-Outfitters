import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// getAPIHealth is defined in our axios-services directory index.js
// you can think of that directory as a collection of api adapters
// where each adapter fetches specific info from our express server's /api route
import { getAPIHealth } from "../api";
import LoginRegister from "./LoginRegister";
import Home from "./Home";
import Header from "./Header";
import NavBar from "./NavBar";
import Product from "./Product";
import "../style/App.css";

const App = () => {
  const [APIHealth, setAPIHealth] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token") );
  const [user, setUser] = useState({});

  useEffect(() => {
    // console.log("This is the token", token)
    const getMe = async () => {
      const data = await fetchMe(token);
      setUser(data);
    };
    if (token) {
      getMe();
    }
  }, [token]);

  useEffect(() => {
    const getAPIStatus = async () => {
      const { healthy } = await getAPIHealth();
      setAPIHealth(healthy ? "api is up! :D" : "api is down :/");
    };

    // getAPIStatus();
  }, []);

  return (
    <>
      <Header />
      <NavBar />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/sticks" element={<Product />}></Route>
          <Route path="/pucks" element={<Product />}></Route>
          <Route path="/skates" element={<Product />}></Route>
          <Route path="/helmets" element={<Product />}></Route>
          <Route path="/protectiveGear" element={<Product />}></Route>
          <Route path="/goalieGear" element={<Product />}></Route>
          <Route path="/accessories" element={<Product />}></Route>
          <Route path="/teamApparel" element={<Product />}></Route>
          <Route path="/LoginRegister" element={<LoginRegister setToken={setToken}/>}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
