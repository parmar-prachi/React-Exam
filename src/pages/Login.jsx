import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const login = () => {
        localStorage.setItem("user", name);
        navigate("/");
    };

    return (
        <div className="container mt-5">
            <h3>Login</h3>

            <input
                className="form-control"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
            />

            <button className="btn btn-primary mt-3" onClick={login}>
                Login
            </button>
        </div>
    );
};

export default Login;