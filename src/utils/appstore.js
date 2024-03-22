import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice";
import moviesReducer from "./moviesSlice"
import gptReducer from "./gptSlice"
const appstore = configureStore({
  reducer: {
    user: userReducer,
    movies:moviesReducer,
    gpt:gptReducer,
  },
});

export default appstore;
