import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, registerUser, fetchMe } from "../api";
import "../style/Profile.css";

const Profile = (props) => {
  const { token, user, setUser, email, setEmail } = props;
  const [emailTwo, setEmailTwo] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");

  const [nameFirst, setNameFirst] = useState("");
  const [nameLast, setNameLast] = useState("");
  const [addressStreet, setaddressStreet] = useState("");
  const [addressStreet2, setaddressStreet2] = useState("");
  const [addressCity, setaddressCity] = useState("");
  const [addressState, setaddressState] = useState("");
  const [addressZip, setaddressZip] = useState("");

  const [stateError, setStateError] = useState("");
  // const [token, setToken] = useState("");
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState([]);

  return (
    <>
      <div className="user-profile-container">
        <div className="user-profile-container-left">
          <div className="user-profile">
            <h3 className="title">
              Ice Factory Member
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
                  <label htmlFor="addressStreet">Address 1: </label>
                  <input
                    value={addressStreet}
                    type="address-street"
                    placeholder="Address 1"
                    minLength={1}
                    onChange={(e) => setAddressStreet(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="addressStreet2">Addreess 2: </label>
                  <input
                    value={addressStreet2}
                    type="address-street-2"
                    placeholder="Address 2"
                    minLength={3}
                    onChange={(e) => setAddressStreet2(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="addressCity">City: </label>
                  <input
                    value={addressCity}
                    type="address-city"
                    placeholder="City"
                    minLength={3}
                    onChange={(e) => setAddressCity(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="addressState">State: </label>
                  <input
                    value={addressState}
                    type="address-state"
                    placeholder="State"
                    minLength={3}
                    onChange={(e) => setAddressState(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="addressZip">Zip: </label>
                  <input
                    value={addressZip}
                    type="address-zip"
                    placeholder="Zip"
                    minLength={3}
                    onChange={(e) => setAddressZip(e.target.value)}
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
        <div className="user-profile-container-right">
          <div className="order-history">
            <h3 className="title">Order History</h3>
          </div>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default Profile;
