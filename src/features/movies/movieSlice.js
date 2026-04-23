import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMoviesAPI, fetchMovieDetailsAPI } from "./movieAPI";

// Fetch Movies :

export const fetchMovies = createAsyncThunk(
    "movies/fetchMovies",
    async (search) => {
        return await fetchMoviesAPI(search);
    }
);

// Fetch Movie Details :

export const fetchMovieDetails = createAsyncThunk(
    "movies/fetchMovieDetails",
    async (id) => {
        return await fetchMovieDetailsAPI(id);
    }
);

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        selectedMovie: null,
        loading: false,
        error: null,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder

            // MOVIES LIST :

            .addCase(fetchMovies.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = action.payload || [];
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // MOVIE DETAILS :

            .addCase(fetchMovieDetails.fulfilled, (state, action) => {
                state.selectedMovie = action.payload;
            });
    },
});

export default movieSlice.reducer;