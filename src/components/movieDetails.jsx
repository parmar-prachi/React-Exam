import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../features/movies/movieSlice";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { selectedMovie } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchMovieDetails(id));
    }, [id, dispatch]);

    if (!selectedMovie) return <h3>Loading...</h3>;

    return (
        <div className="container mt-4 movie-details-layout">

            <img src={selectedMovie.Poster} alt="" />

            <div className="movie-info">
                <h2>{selectedMovie.Title}</h2>

                <p>
                    <span className="badge bg-warning text-dark">
                        {selectedMovie.Year}
                    </span>

                    <span className="badge bg-success">
                        {selectedMovie.imdbRating}
                    </span>

                    <span className="badge bg-info text-dark">
                        {selectedMovie.Genre}
                    </span>
                </p>

                <p><b>Released:</b> {selectedMovie.Released}</p>

                <p>{selectedMovie.Plot}</p>

                <p><b>Actors:</b> {selectedMovie.Actors}</p>
            </div>

        </div>
    );
};

export default MovieDetails;