import React from "react";


function User(props) {
    const user = props.user;

    return (
        <div className="user">
            <img src={user.picture} alt="user_photo" className="user-picture" />
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            <p>Balance: {user.balance}</p>
        </div>
    );
}


export function UsersList({ users }) {
    return (
        <div className="users-container">
            {users.map(user => <User key={user._id} user={user} />)}
        </div>)
}
