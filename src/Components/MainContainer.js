import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "../Components/VideoTitle";
import VideoBackground from "../Components/VideoBackground";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const MainContainer = () => {
  const [movies,setMovies]=useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    nowPlayingMovies();
  }, []);

  const nowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    setMovies(json.results)
    //console.log("now playing movies:", json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  let mainMovie;

  if (movies != null) {
    mainMovie = movies[0];
  }

  console.log("main movie:", mainMovie);
  console.log("title:",mainMovie?.original_title)
  //const { original_title, overview } = mainMovie;
  return (
    <div>
      <VideoTitle title={mainMovie?.original_title} overview={mainMovie?.overview}/>
      <VideoBackground movieId={mainMovie?.id}/>
    </div>
  );
};

export default MainContainer;
