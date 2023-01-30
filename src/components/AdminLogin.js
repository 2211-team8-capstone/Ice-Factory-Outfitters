import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

import { loginAdmin } from "../api";
import "../style/AdminLogin.css";

// import "../style/Header.css";
const AdminLogin = (props) => {
    const [adminEmail, setAdminEmail] = useState("");
    const [adminPassword, setAdminPassword] = useState("");
    const [stateError, setStateError] = useState("");
    const navigate = useNavigate();

    return (
        <>
            <div className="admin-login">
                <h3>Admin Login</h3>
                <form
                    className="admin-login-form"
                    onSubmit={async (e) => {
                        if (!adminEmail || !adminPassword) {
                            e.preventDefault();
                            const errorMessage = "Please enter a valid Admin Email and Admin Password";
                            setStateError(errorMessage);
                        } else {
                            try {
                                e.preventDefault();
                                localStorage.setItem("adminEmail", adminEmail);
                                const result = await loginAdmin(adminEmail, adminPassword);
                                console.log("BBBBBKKKKK", result);

                                const token = result.token;
                                // console.log("this is token in reg user", token);
                                props.setToken(token);
                                localStorage.setItem("token", token);

                                const adminUserId = result.admin.id;
                                console.log("this is adminUserId in reg user", adminUserId);
                                localStorage.setItem("adminUserId", adminUserId);

                                // const cart = await getCartIdByUserId(adminUserId, token);
                                // console.log(
                                //     "this is the newly created cart in loginUser",
                                //     cart
                                // );
                                // localStorage.setItem("cart#", cart.id);

                                navigate("/");
                            } catch (error) {
                                console.error(error);
                            }
                        }
                    }}
                >
                    <label htmlFor="adminEmail">Admin User Email</label>
                    <input
                        value={email}
                        type="text"
                        placeholder="Admin Email Address"
                        minLength={3}
                        onChange={(e) => setAdminEmail(e.target.value)}
                    ></input>
                    <label htmlFor="adminPassword">Admin Password</label>
                    <input
                        value={adminPassword}
                        type="password"
                        placeholder="Admin Password"
                        minLength={3}
                        onChange={(e) => setAdminPassword(e.target.value)}
                    ></input>
                    <button type="Submit">Admin Sign In</button>
                    {stateError ? <h3>{stateError}</h3> : ""}
                </form>
            </div>
        </>
    );
};

export default AdminLogin;
