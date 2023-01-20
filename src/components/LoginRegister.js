import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../api";


// import "../style/Header.css";
const LoginRegister = () => {
  const [email, setEmail] = useState("");
  const [emailTwo, setEmailTwo] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [stateError, setStateError] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate()

  return (
    <>
      <div className="login-register">
        <div className="login">
          <h3>Existing Customers Login</h3>
          <form className="login-form"
            onSubmit={async (e) => {
              if (!email || !password) {
                e.preventDefault()
                const errorMessage = "Please enter a valid Email and Password"
                setStateError(errorMessage);
              } else {
              try {
                e.preventDefault();
                //console.log(password, email);
                localStorage.setItem("email", email);
                const token = await loginUser(email, password);
                setToken(token);
                localStorage.setItem("token", token);
                navigate('/')

              } catch (error) {
                console.error(error)
              }}
            }}
          >
            <label htmlFor="email">Existing User Email</label>
            <input
              value={email}
              type="text"
              placeholder="Email Address"
              minLength={3}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              type="password"
              placeholder="Password"
              minLength={3}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button type="Submit">Sign In</button>
            {stateError ? <h3>{stateError}</h3> : ""}
          </form>
        </div>

        <div className="register">
          <h3>New Customers Login</h3>
          <form className="register-form"
            onSubmit={async (e) => {
              if (!emailTwo || !passwordTwo) {
                e.preventDefault()
                const errorMessage = "Please enter a valid Email and Password"
                setStateError(errorMessage);
              } else {
              try {
                e.preventDefault();
                //console.log(password, email);
                localStorage.setItem("email", emailTwo);
                const token = await registerUser(emailTwo, passwordTwo);
                setToken(token);
                localStorage.setItem("token", token);
                navigate('/')

              } catch (error) {
                console.error(error)
              }}
            }}
          >
            <label htmlFor="emailTwo">New User Email</label>
            <input
              value={emailTwo}
              type="text"
              placeholder="Email Address"
              minLength={3}
              onChange={(e) => setEmailTwo(e.target.value)}
            ></input>
            <label htmlFor="passwordTwo">Password</label>
            <input
              value={passwordTwo}
              type="password"
              placeholder="Password"
              minLength={3}
              onChange={(e) => setPasswordTwo(e.target.value)}
            ></input>
            <button type="Submit">Register</button>
            {stateError ? <h3>{stateError}</h3> : ""}
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginRegister;