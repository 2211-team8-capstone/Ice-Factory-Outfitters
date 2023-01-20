import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


// import "../style/Header.css";
const LoginRegister = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [stateError, setStateError] = useState("");
  const navigate = useNavigate()

  return (
    <>
      <div className="login-register">
        <div className="login">
          <h3>Existing Customers Login</h3>
          <form className="login-form"
            onSubmit={async (e) => {
              if (!username || !password) {
                e.preventDefault()
                const errorMessage = "Please enter a valid Username and Password"
                setStateError(errorMessage);
              } else {
              try {
                e.preventDefault();
                //console.log(password, username);
                localStorage.setItem("username", username);
                const token = await loginUser(username, password);
                setToken(token);
                localStorage.setItem("token", token);
                navigate('/')

              } catch (error) {
                console.error(error)
              }}
            }}
          >
            <label htmlFor="username">Existing User Email</label>
            <input
              value={username}
              type="text"
              placeholder="Email Address"
              minLength={3}
              onChange={(e) => setUsername(e.target.value)}
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
              if (!username || !password) {
                e.preventDefault()
                const errorMessage = "Please enter a valid Username and Password"
                setStateError(errorMessage);
              } else {
              try {
                e.preventDefault();
                //console.log(password, username);
                localStorage.setItem("username", username);
                const token = await registerUser(username, password);
                setToken(token);
                localStorage.setItem("token", token);
                navigate('/')

              } catch (error) {
                console.error(error)
              }}
            }}
          >
            <label htmlFor="username">New User Email</label>
            <input
              value={username}
              type="text"
              placeholder="Email Address"
              minLength={3}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              type="password"
              placeholder="Password"
              minLength={3}
              onChange={(e) => setPassword(e.target.value)}
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