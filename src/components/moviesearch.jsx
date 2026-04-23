import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../features/movies/movieSlice";

const MovieSearch = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();

    const { movies } = useSelector((state) => state.movies);

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.length > 2) {
            dispatch(fetchMovies(value));
        }
    };

    return (
        <div className="container mt-3">
            <input
                className="form-control"
                placeholder="Search movies..."
                value={query}
                onChange={handleSearch}
            />

            <div className="row mt-3">
                {movies.map((m) => (
                    <div className="col-md-3" key={m.imdbID}>
                        <h6>{m.Title}</h6>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieSearch;