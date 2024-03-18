import useMovieTrailer from "../hooks/useMovieTrailer";
import { API_OPTIONS } from "../utils/constants";
import React, { useEffect, useState } from "react";
const VideoBackground = ({ movieId }) => {
  const [movTrailer, setMovTrailer] = useState(null);

  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
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
    <div>
      <iframe
        src={"https://www.youtube.com/embed/" + movTrailer?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
//        src="https://www.youtube.com/embed/iM150ZWovZM?si=cBJDc-xwYiPAH9uh"
