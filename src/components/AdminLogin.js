import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { loginAdmin } from "../api";
import "../style/AdminLogin.css";

const AdminLogin = (props) => {
    const [adminEmail, setAdminEmail] = useState("");
    const [adminPassword, setAdminPassword] = useState("");
    const [stateError, setStateError] = useState("");
    const navigate = useNavigate();

    return (
        <>
            <div className="admin-login">
                <div className='admin-title'>
                    <h3>Admin Login</h3>
                </div>
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
                                const adminResult = await loginAdmin(adminEmail, adminPassword);
                                console.log("BBBBBK", adminResult);

                                const adminToken = adminResult.adminToken;
                                // console.log("this is adminToken in reg user", adminToken);
                                props.setAdminToken(adminToken);
                                localStorage.setItem("adminToken", adminToken);

                                const adminId = adminResult.admin.id;
                                console.log("this is adminId in reg admin", adminId);
                                localStorage.setItem("adminId", adminId);

                                // const cart = await getCartIdByUserId(adminUserId, adminToken);
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
                    <div>
                        <label htmlFor="adminEmail">Admin Email: </label>
                        <input
                            value={adminEmail}
                            type="text"
                            placeholder="Admin Email Address"
                            minLength={3}
                            onChange={(e) => setAdminEmail(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="adminPassword">Admin Password: </label>
                        <input
                            value={adminPassword}
                            type="password"
                            placeholder="Admin Password"
                            minLength={3}
                            onChange={(e) => setAdminPassword(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <button type="Submit">Admin Sign In</button>
                    </div>
                    {stateError ? <h3>{stateError}</h3> : ""}
                </form>
            </div>
        </>
    );
};

export default AdminLogin;
