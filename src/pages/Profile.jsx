import React from "react";

const Profile = () => {
    const user = localStorage.getItem("user");

    return (
        <div className="container mt-4">
            <h2>Profile</h2>
            <p>Welcome: {user}</p>
        </div>
    );
};

export default Profile;