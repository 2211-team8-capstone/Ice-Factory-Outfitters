import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../api";
import "../style/Admin.css";

const AdminProfile = (props) => {
    const [email, setEmailTwo] = useState("");
    const [passwordTwo, setPasswordTwo] = useState("");

    const [nameFirst, setNameFirst] = useState("");
    const [nameLast, setNameLast] = useState("");

    const [stateError, setStateError] = useState("");
    // const [token, setToken] = useState("");
    const navigate = useNavigate();

    console.log("TTTTTTTTTTTTTTTTTTT", emailTwo, props);
    return (
        <>
            <div className="user-profile-container">
                <div className="user-profile-container-left">
                    <div className="user-profile">
                        <h3 className="title">
                            Welcome Admin
                        </h3>
                        <div>Email Address: </div>
                    </div>

                    <br></br>

                    <div className="update-profile">
                        <div className="update">
                            <h3 className="title">Update Profile</h3>
                            <form
                                className="update-form"
                                onSubmit={async (e) => {
                                    if (!emailTwo || !passwordTwo) {
                                        e.preventDefault();
                                        const errorMessage = "Please enter a valid Email and Password";
                                        setStateError(errorMessage);
                                    } else {
                                        try {
                                            e.preventDefault();

                                            localStorage.setItem("email", emailTwo);
                                            const token = await registerUser(emailTwo, passwordTwo);

                                            props.setToken(token);
                                            localStorage.setItem("token", token);
                                        } catch (error) {
                                            console.error(error);
                                        }
                                    }
                                }}
                            >
                                <div>
                                    <label htmlFor="emailTwo">User Email: </label>
                                    <input
                                        value={emailTwo}
                                        type="text"
                                        placeholder="Email Address"
                                        minLength={3}
                                        onChange={(e) => setEmailTwo(e.target.value)}
                                    ></input>
                                </div>
                                <div>
                                    <label htmlFor="passwordTwo">Password: </label>
                                    <input
                                        value={passwordTwo}
                                        type="password"
                                        placeholder="Password"
                                        minLength={3}
                                        onChange={(e) => setPasswordTwo(e.target.value)}
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
                    <div className="admin-order-history">
                        <h3 className="title">Order History</h3>
                    </div>
                    <br></br>
                </div>
            </div>
        </>
    );
};

export default AdminProfile;