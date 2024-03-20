import useMovieTrailer from "../hooks/useMovieTrailer";
import { API_OPTIONS } from "../utils/constants";
import React, { useEffect, useState } from "react";
const VideoBackground = ({ movieId }) => {
  const [movTrailer, setMovTrailer] = useState(null);

  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1011985/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("video trailer", json);

    const trailer = json.results.filter((video) => video?.type === "Trailer");

    console.log("the trailor is:", trailer);
    setMovTrailer(trailer);
  };

  useEffect(() => {
    getMovieVideo();
  }, []);

  return (
    <div className="w-screen">
      <iframe className="w-screen aspect-video"
        src="https://www.youtube.com/embed/d2OONzqh2jk?si=kTpSOPJmid5bdFxV?&autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
//        src="https://www.youtube.com/embed/iM150ZWovZM?si=cBJDc-xwYiPAH9uh"
