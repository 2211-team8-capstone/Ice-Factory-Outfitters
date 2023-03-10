import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser, registerUser, createCart, getCartIdByUserId } from "../api";
import "../style/LoginRegister.css";

const LoginRegister = (props) => {
  const { cartRender, setCartRender } = props;
  const [email, setEmail] = useState("");
  const [emailTwo, setEmailTwo] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [stateError, setStateError] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className="login-register">
        <div className="login">
          <h3>Existing Customers Login</h3>
          <form
            className="login-form"
            onSubmit={async (e) => {
              if (!email || !password) {
                e.preventDefault();
                const errorMessage = "Please enter a valid Email and Password";
                setStateError(errorMessage);
              } else {
                try {
                  e.preventDefault();
                  localStorage.setItem("email", email);
                  const result = await loginUser(email, password);

                  const token = result.token;
                  props.setToken(token);
                  localStorage.setItem("token", token);

                  const userId = result.user.id;
                  localStorage.setItem("userId", userId);

                  const cart = await getCartIdByUserId(userId, token);

                  localStorage.setItem("cart#", cart.id);
                  if (cartRender) {
                    setCartRender(false);
                  } else {
                    setCartRender(true);
                  }

                  navigate("/");
                } catch (error) {
                  console.error(error);
                }
              }
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
          <h3>New Customer Register</h3>
          <form
            className="register-form"
            onSubmit={async (e) => {
              if (!emailTwo || !passwordTwo) {
                e.preventDefault();
                const errorMessage = "Please enter a valid Email and Password";
                setStateError(errorMessage);
              } else {
                try {
                  e.preventDefault();
                  localStorage.setItem("email", emailTwo);

                  const result = await registerUser(emailTwo, passwordTwo);

                  const token = result.token;
                  props.setToken(token);
                  localStorage.setItem("token", token);

                  const userId = result.user.id;
                  localStorage.setItem("userId", userId);

                  const cart = await createCart(userId, token);

                  localStorage.setItem("cart#", cart.id);
                  if (cartRender) {
                    setCartRender(false);
                  } else {
                    setCartRender(true);
                  }

                  navigate("/");
                } catch (error) {
                  console.error(error);
                }
              }
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
