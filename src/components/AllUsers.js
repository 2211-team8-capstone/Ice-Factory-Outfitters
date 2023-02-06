import React from "react";
import { Link } from "react-router-dom";
import "../style/AllUsers.css";
import { destroyUser } from "../api";

const AllUsersList = (props) => {
  const { users, setUsers, selectedUser } = props;
  const isAdmin = localStorage.getItem("isAdmin");

  return (
    <>
      <div className="all-users-container">
        {isAdmin === "true" ? (
          <div>
            <h1>All Users</h1>
            <div className="back-button">
              <Link to="/Admin">
                <button>Back to Admin</button>
              </Link>
            </div>
            <div>
              {" "}
              {users.map((user) => (
                <div className="single-user-container" key={user.id}>
                  <p>User: {`${user.lastname}, ${user.firstname}`}</p>
                  <p>Email: {`${user.email}`}</p>
                  <div>
                    <button
                      className="user-delete"
                      onClick={async () => {
                        if (window.confirm("Delete this user?") === true) {
                          await destroyUser(user.id);
                          alert("User deleted");
                          setUsers(
                            users.filter(
                              (filteredUser) => filteredUser.id !== user.id
                            )
                          );
                        }
                      }}
                    >
                      Delete User
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>Admin Access Required</p>
        )}
      </div>
    </>
  );
};

export default AllUsersList;
