import React from "react";
import { getAllUsers } from "../api";
import "../style/SingleProduct.css";

const SingleUser = (props) => {
    const { selectedUser, setUsers } = props;

    const { nameFirst, nameLast, email } = selectedUser;


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
