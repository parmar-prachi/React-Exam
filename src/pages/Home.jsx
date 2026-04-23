import React from "react";
import MovieSearch from "../components/moviesearch";
import MovieList from "../components/movieList";

const Home = () => {
    return (
        <div>
            <MovieSearch />
            <MovieList />
        </div>
    );
};

export default Home;