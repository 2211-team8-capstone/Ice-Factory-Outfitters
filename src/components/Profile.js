import React, { useState, useEffect } from "react";
import { editUser, fetchMe } from "../api/index";
import { Link, useNavigate } from "react-router-dom";
import "../style/Profile.css";

const Profile = (props) => {
  const { token, user, setUser, 
          email, setEmail,
        } = props;
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userAddressNum, setUserAddressNum] = useState('');
  const [userAddressSt, setUserAddressSt] = useState('');
  const [userCity, setUserCity] = useState('');
  const [userState, setUserState] = useState('');
  const [userZip, setUserZip] = useState('');
  const [stateError, setStateError] = useState();
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState([]);
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  // console.log("PROFILE UserId", userId)
  
  const handleEditUser = async (
    userEmail,
    userPassword,
    userFirstName,
    userLastName,
    userPhone,
    userAddressNum,
    userAddressSt,
    userCity,
    userState,
    userZip,
  ) => {
    const response = await editUser(
      token,
      userId,
      userEmail,
      userPassword,
      userFirstName,
      userLastName,
      userPhone,
      userAddressNum,
      userAddressSt,
      userCity,
      userState,
      userZip,
    );
    console.log("PROFILE response", response)
    return response;
  }  

  return (
    <>
      <div className="user-profile-container">
        <div className="user-profile-container-left">
          <div className="user-profile">
            <h3 className="title">
              Ice Factory Member
              <hr></hr>
            </h3>
                <div key={user?.id}>
                  <div>First Name: {user?.firstname}</div>
                  <div>Last Name: {user?.lastname}</div>
                  <div>Email Address: {user?.email}</div>
                  <div>Phone Number: {user?.phone}</div>
                  <div>Address 1: {user?.addressnum}</div>
                  <div>Address 2: {user?.addressst}</div>
                  <div>City: {user?.city}</div>
                  <div>State: {user?.state}</div>
                  <div>Zip: {user?.zip}</div>
                </div>
          </div>
        <br></br>
          <div className="update-profile">
            <div className="update">
              <h3 className="title">Update Profile</h3>
              <hr></hr>
              <form
                className="update-form"
              ></form>
              {/* onSubmit={async (e)} */}
              <div>
                  <label htmlFor="userFirstName">First Name: </label>
                  <input
                    value={userFirstName}
                    type="text"
                    placeholder="  First Name"
                    minLength={1}
                    onChange={(e) => setUserFirstName(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="userLastName">Last Name: </label>
                  <input
                    value={userLastName}
                    type="text"
                    placeholder="  Last Name"
                    minLength={2}
                    onChange={(e) => setUserLastName(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="userEmail">User Email: </label>
                  <input
                    value={userEmail}
                    type="text"
                    placeholder="  Email Address"
                    minLength={3}
                    onChange={(e) => setUserEmail(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="userPassword">Password: </label>
                  <input
                    value={userPassword}
                    type="text"
                    placeholder="  Password"
                    minLength={4}
                    onChange={(e) => setUserPassword(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="userPhone">Phone Number: </label>
                  <input
                    value={userPhone}
                    type="text"
                    placeholder="  Phone Number"
                    minLength={7}
                    onChange={(e) => setUserPhone(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="userAddressNum">Address 1: </label>
                  <input
                    value={userAddressNum}
                    type="integer"
                    placeholder="  Address 1"
                    minLength={1}
                    onChange={(e) => setUserAddressNum(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="userAddressSt">Addreess 2: </label>
                  <input
                    value={userAddressSt}
                    type="text"
                    placeholder="  Address 2"
                    minLength={2}
                    onChange={(e) => setUserAddressSt(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="userCity">City: </label>
                  <input
                    value={userCity}
                    type="text"
                    placeholder="  City"
                    minLength={3}
                    onChange={(e) => setUserCity(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="userState">State: </label>
                  <input
                    value={userState}
                    type="text"
                    placeholder="  State"
                    minLength={2}
                    onChange={(e) => setUserState(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="userZip">Zip: </label>
                  <input
                    value={userZip}
                    type="integer"
                    placeholder="  Zip"
                    minLength={5}
                    onChange={(e) => setUserZip(e.target.value)}
                  ></input>
                </div>
                <div>
                  <button type="Submit"
                    className="updateUserButton"
                    onClick={() => {
                      handleEditUser(
                        userEmail,
                        userPassword,
                        userFirstName,
                        userLastName,
                        userPhone,
                        userAddressNum,
                        userAddressSt,
                        userCity,
                        userState,
                        userZip,
                      );
                    }}
                  >
                    Update Profile
                  </button>
                </div>
                {stateError ? <h3>{stateError}</h3> : ""}
            </div>
          </div>
        </div>
        <div className="user-profile-container-right">
          <div className="order-history">
            <h3 className="title">Order History</h3>
            <hr></hr>
          </div>
          <br></br>
        </div>
      </div>
    </>
  );
};


export default Profile;