import React from "react";
import { Link } from "react-router-dom";
import '../style/AllUsers.css';

const AllUsersList = (props) => {
    const { users, setUsers } = props

    return (
        <>
            <div>
                <h1>All Users</h1>
                <div className='back-button'>
                    <Link to='/Admin'>
                        <button>Back</button>
                    </Link>
                </div>
                <div> {users.map(user =>
                    <div
                        className='single-user-container'
                        key={user.id}
                    >
                        <h3>User: {`${user.firstName} ${user.nameLast}`}</h3>
                        <p>Email: {`${user.email}`}</p>
                        <div>
                            <button
                                className='user-delete'
                                onClick={async () => {
                                    if (window.confirm("Delete this user?") === true) {
                                        await deleteUser(user.id);
                                        alert('User deleted')
                                        setUsers(users.filter((filteredUser) => filteredUser.id !== user.id))
                                    }
                                }}
                            >Delete User</button>
                        </div>

                    </div>
                )}
                </div>
            </div>
        </>
    )
}

export default AllUsersList