import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "../style/Header.css";

const LoginRegister = () => {
  return (
    <>
      <div className="login-register-container">
        <div className="login">
          <h3>Existing Customers Login Below</h3>
          <form onSubmit={"hello"}>
            <input
              type="text"
              placeholder="Email Address"
              minLength={3}
            ></input>
            <input
              type="text"
              placeholder="Email Address"
              minLength={3}
            ></input>
            <button type="submit"></button>
          </form>
        </div>
        <div className="register">
          <h3>Existing Customers Login Below</h3>
          <form onSubmit={"hello"}>
            <input
              type="text"
              placeholder="Email Address"
              minLength={3}
            ></input>
            <input
              type="text"
              placeholder="Email Address"
              minLength={3}
            ></input>
            <button type="submit"></button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginRegister;
