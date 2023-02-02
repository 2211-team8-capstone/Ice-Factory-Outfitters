import React, { useEffect, useState } from "react";
import { addProductToCart } from "../api";
import { getAllUsers } from "../api";
import "../style/SingleProduct.css";

const SingleUser = (props) => {
    // need to pass selectedContact state through props, then pull name, desc, price, image off that selectedContact to render data on the single product view displayed
    const {
        setSelectedUser,
        selectedUser,
        token,
        setUsers,
    } = props;
    const { nameFirst, nameLast, email } =
        selectedUser;


    if (response && !response.error) {
        const getUsers = async () => {
            const data = await getAllUsers();
            setUsers(data);
        };
        getUsers();
    }

    return (
        <div className="single-user">
            <div className="single-user-info">
                {editSelected === false ? (
                    <p> {nameLast}, {nameFirst} </p>
                ) : (
                    <div>
                        <p> {email} </p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default SingleUser;
