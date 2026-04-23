import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <nav className="navbar navbar-dark bg-dark px-3">
            <Link className="navbar-brand" to="/">
                Movie Library
            </Link>

            <div>
                <Link className="btn btn-outline-light mx-2" to="/profile">
                    Profile
                </Link>

                <button className="btn btn-danger" onClick={logout}>
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;