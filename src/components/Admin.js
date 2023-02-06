import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Admin.css";

const AdminProfile = () => {

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