import React from "react";
import { img_cdn_url } from "../utils/constants";

const MovieCard = ({ posterpath }) => {
  return (
    <div className="w-48 pr-2">
      <img alt="movie card" src={img_cdn_url + posterpath} />
    </div>
  );
};

export default MovieCard;
