import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import MovieDetails from "./components/movieDetails";
import PrivateRoute from "./components/privateRoute";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/login" element={<Login />} />

                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/movie/:id"
                    element={
                        <PrivateRoute>
                            <MovieDetails />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;