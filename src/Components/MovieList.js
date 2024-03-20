import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("-------------------------------", movies);
  return (
    <div className="p-2 ">
      <h3 className="text-2xl font-bold text-white">{title}</h3>

      <div className="flex overflow-x-scroll mt-2">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterpath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
