import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/AllUsers.css";

const AllUsersList = (props) => {
  const { users, setUsers, selectedUser } = props;
  const isAdmin = localStorage.getItem("isAdmin");
  console.log("testaaaaaaaaaaaaaaaaaaaaaaaaaaa", users);

  return (
    <>
      <div className="all-users-container">
        {isAdmin === "true" ? (
          <div>
            <h1>All Users</h1>
            <div className="back-button">
              <Link to="/Admin">
                <button>Back</button>
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
                          await deleteUser(user.id);
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

  // const handleDelete = async (userIdToDelete) => {
  //     const response = await deleteSingleUser(token, userIdToDelete);
  //     console.log("error?", response);

  //     if (response && !response.error) {
  //         const getUsers = async () => {
  //             const data = await getAllUsers();
  //             setUsers(data);
  //         };
  //         getUsers();
  //     }
  // };

  // useEffect(() => {
  //     setSelectedUser();
  // }, []);

  // return (
  //     <div className="all-users">
  //         {selectedUser ? (
  //             <SingleUser
  //                 selectedUser={selectedUser}
  //                 editSelected={editSelected}
  //                 token={token}
  //                 setUsers={setUsers}
  //                 setEditSelected={setEditSelected}

  //             />
  //         ) : (
  //             users.map((user) => {
  //                 return (
  //                     <div className="user-container" key={user.id}>
  //                         <div className="single-user">

  //                             <p className="headers">{user.nameFirst}</p>
  //                             <p className="headers">{user.nameLast}</p>
  //                             <p className="headers">{user.email}</p>
  //                             <div className="sub-container">
  //                                 <div className="btn-container">

  //                                     <button
  //                                         className="user-btn"
  //                                         onClick={() => handleDelete(user.id)}
  //                                     >
  //                                         Delete
  //                                     </button>
  //                                 </div>
  //                             </div>
  //                         </div>
  //                     </div>
  //                 );
  //             })
  //         )}
  //     </div>
  // );
};

export default AllUsersList;
