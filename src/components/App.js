import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// getAPIHealth is defined in our axios-services directory index.js
// you can think of that directory as a collection of api adapters
// where each adapter fetches specific info from our express server's /api route
import { getAPIHealth } from "../api";
import "../style/App.css";
import Home from "./Home";
import Header from "./Header";
import NavBar from "./NavBar";

const App = () => {
  const [APIHealth, setAPIHealth] = useState("");

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
        </Routes>
      </div>
    </>
  );
};

export default App;
