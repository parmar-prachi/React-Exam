import axios from "axios";

const API_KEY = "fc263f16";
const BASE_URL = "https://www.omdbapi.com/";

// Search Movies
export const fetchMoviesAPI = async (search) => {
    const { data } = await axios.get(
        `${BASE_URL}?apikey=${API_KEY}&s=${search}`
    );

    return data.Search || [];
};

// Movie Details
export const fetchMovieDetailsAPI = async (id) => {
    const { data } = await axios.get(
        `${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`
    );

    return data;
};