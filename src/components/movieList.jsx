import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../features/movies/movieSlice";
import { Link } from "react-router-dom";

const MovieList = () => {
    const dispatch = useDispatch();
    const { movies, loading } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchMovies("friends"));
    }, [dispatch]);

    return (
        <div className="container mt-3">
            <h3>Popular Movies</h3>

            {loading && <h5>Loading...</h5>}

            <div className="row">
                {movies.map((movie) => (
                    <div className="col-md-3" key={movie.imdbID}>
                        <div className="card mb-3">
                            <img src={movie.Poster} className="card-img-top" />

                            <div className="card-body">
                                <h6>{movie.Title}</h6>

                                <Link
                                    to={`/movie/${movie.imdbID}`}
                                    className="btn btn-primary btn-sm"
                                >
                                    View
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieList;