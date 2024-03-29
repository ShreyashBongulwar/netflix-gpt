import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-60 pl-4 relative z-index">
        <div>
          <MovieList title={"Now Playing"} movies={movies} />
        </div>
        <div>
          <MovieList title={"Popular"} movies={movies} />
        </div>

        <div>
          <MovieList title={"Comedy"} movies={movies} />
        </div>

        <div>
          <MovieList title={"Horror"} movies={movies} />
        </div>

        <div>
          <MovieList title={"Documentry"} movies={movies} />
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
