import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: null,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      return action.payload;
    },
    addPopularMovies: (state, action) => {
      return action.payload;
    },
    addTrailerVideo:(state,action)=>{
      state.trailerVideo = action.payload;
    }
  },
});

export const { addNowPlayingMovies,addPopularMovies,addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
