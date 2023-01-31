import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../api";
import "../style/Admin.css";

const AdminProfile = (props) => {
    const [adminEmail, setAdminEmail] = useState("");
    const [adminPassword, setAdminPassword] = useState("");

    const [nameFirst, setNameFirst] = useState("");
    const [nameLast, setNameLast] = useState("");

    const [stateError, setStateError] = useState("");
    // const [token, setToken] = useState("");
    const navigate = useNavigate();

    console.log("TTTTTTTTTTTTTTTTTTT", adminEmail, props);
    return (
        <>
            <div className="admin-profile-container">
                <div className="admin-profile-container-left">
                    <div className="admin-profile">
                        <h3 className="admin-title">
                            Welcome Admin
                        </h3>
                        <div>Email Address: </div>
                    </div>

                    <br></br>

                    <div className="update-admin-profile">
                        <div className="update-admin">
                            <h3 className="admin-title">Update Profile</h3>
                            <form
                                className="update-admin-form"
                                onSubmit={async (e) => {
                                    if (!adminEmail || !adminPassword) {
                                        e.preventDefault();
                                        const errorMessage = "Please enter a valid Admin Email and Admin Password";
                                        setStateError(errorMessage);
                                    } else {
                                        try {
                                            e.preventDefault();

                                            localStorage.setItem("adminEmail", adminEmail);
                                            const adminToken = await registerAdmin(adminEmail, adminPassword);

                                            props.setToken(adminToken);
                                            localStorage.setItem("adminToken", adminToken);
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
                                        placeholder="Email Address"
                                        minLength={3}
                                        onChange={(e) => setAdminEmail(e.target.value)}
                                    ></input>
                                </div>
                                <div>
                                    <label htmlFor="adminEmail">Password: </label>
                                    <input
                                        value={adminPassword}
                                        type="password"
                                        placeholder="Password"
                                        minLength={3}
                                        onChange={(e) => setAdminPassword(e.target.value)}
                                    ></input>
                                </div>
                                <div>
                                    <label htmlFor="nameFirst">First Name: </label>
                                    <input
                                        value={nameFirst}
                                        type="first-name"
                                        placeholder="First Name"
                                        minLength={2}
                                        onChange={(e) => setNameFirst(e.target.value)}
                                    ></input>
                                </div>
                                <div>
                                    <label htmlFor="nameLast">Last Name: </label>
                                    <input
                                        value={nameLast}
                                        type="last-name"
                                        placeholder="Last Name"
                                        minLength={2}
                                        onChange={(e) => setNameLast(e.target.value)}
                                    ></input>
                                </div>

                                <div>
                                    <button type="Update">Update</button>
                                </div>
                                {stateError ? <h3>{stateError}</h3> : ""}


                            </form>
                        </div>
                    </div>
                </div>
                <div className="admin-profile-container-right">
                    <div className="edit-products">
                        <h3 className="admin-add-products">
                            <Link to="/AddProducts">Add Products</Link>
                        </h3>
                    </div>
                    <br></br>
                    <div className="admin-order-history">
                        <h3 className="admin-title">Recent Orders</h3>
                    </div>
                    <br></br>
                </div>

            </div>
        </>
    );
};

export default AdminProfile;