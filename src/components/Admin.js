import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Admin.css";

const AdminProfile = (props) => {
    const [adminEmail, setAdminEmail] = useState("");
    const [adminPassword, setAdminPassword] = useState("");
    const [nameFirst, setNameFirst] = useState("");
    const [nameLast, setNameLast] = useState("");
    const [stateError, setStateError] = useState("");
    const navigate = useNavigate();


    return (
        <>
            <div className="admin-page-container">
                <div className="admin-profile-title">
                    <h2 className="admin-title">
                        Welcome Admin
                    </h2>
                    <br></br>
                </div>


                <div className="admin-links-container">
                    <div className="admin-edit-products">
                        <h3>

                            <Link to="/AddProducts">Add Products</Link>
                        </h3>
                    </div>
                    <br></br>
                    <div className="admin-order-history">
                        <h3>
                            <Link to="/AllOrders">All Orders</Link>
                        </h3>
                    </div>
                    <br></br>
                    <div className="admin-users">
                        <h3>
                            <Link to="/AllUsers">All Users</Link>
                        </h3>
                    </div>
                    <br></br>
                </div>

            </div>
        </>
    );
};

export default AdminProfile;