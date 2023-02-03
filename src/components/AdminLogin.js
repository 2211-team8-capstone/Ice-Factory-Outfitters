import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAdmin } from "../api";
import "../style/AdminLogin.css";

const AdminLogin = (props) => {
  const { setAdminAccess } = props;
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState("");
  const [stateAdminError, setStateAdminError] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className="admin-login-page">
        <div className="admin-login-container">
          <div className="admin-login-title">
            <h3>Admin Login</h3>
          </div>
          <form
            className="admin-login"
            onSubmit={async (e) => {
              if (!adminEmail || !adminPassword) {
                e.preventDefault();
                const errorMessage =
                  "Please enter a valid Admin Email and Admin Password";
                setStateAdminError(errorMessage);
              } else {
                try {
                  e.preventDefault();
                  localStorage.setItem("adminEmail", adminEmail);
                  const result = await loginAdmin(
                    adminEmail,
                    adminPassword,
                    isAdmin
                  );
                  //   console.log("BBBBBK", result);

                  const token = result.token;
                  //   console.log("this is token in reg user", token);
                  props.setToken(token);
                  localStorage.setItem("token", token);
                  if (token) {
                    setAdminAccess(true);
                  }

                  const adminId = result.admin.id;
                  //   console.log("this is adminId in reg admin", adminId);
                  localStorage.setItem("adminId", adminId);

                  const isAdminTrue = result.admin.isAdmin;
                  localStorage.setItem("isAdmin", isAdminTrue);

                  // const cart = await getCartIdByUserId(adminUserId, token);
                  // console.log(
                  //     "this is the newly created cart in loginUser",
                  //     cart
                  // );
                  // localStorage.setItem("cart#", cart.id);

                  navigate("/Admin");
                } catch (error) {
                  console.error(error);
                }
              }
            }}
          >
            <div className="admin-email">
              <label htmlFor="adminEmail">Admin Email: </label>
              <input
                value={adminEmail}
                type="text"
                placeholder="Admin Email Address"
                minLength={3}
                onChange={(e) => setAdminEmail(e.target.value)}
              ></input>
            </div>
            <div className="admin-password">
              <label htmlFor="adminPassword">Admin Password: </label>
              <input
                value={adminPassword}
                type="password"
                placeholder="Admin Password"
                minLength={3}
                onChange={(e) => setAdminPassword(e.target.value)}
              ></input>
            </div>
            <div className="admin-login-button">
              <button type="Submit">Admin Sign In</button>
              {stateAdminError ? <h3>{stateAdminError}</h3> : ""}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
