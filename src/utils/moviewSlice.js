import { createSlice } from '@reduxjs/toolkit'

// Creating a slice for newMovies state management
const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        mainMovieTrailer: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addMainMovieTrailer: (state, action) => {
            state.mainMovieTrailer = action.payload
        }
    }
})

export const { addNowPlayingMovies, addMainMovieTrailer } = movieSlice.actions
export default movieSlice.reducer;