import React from "react"
import MovieCard from "./MovieCard.jsx"

const MovieList = ({ movieData }) => {

    if(movieData === undefined) return <span className="text-xl font-medium">Something went wrong!</span>
  return (
    <div className="h-11/12  w-full mt-2 flex flex-wrap overflow-y-scroll">
      {movieData.map((dets) => {
        return (
          <MovieCard
            key={dets.imdbID}
            ID={dets.imdbID}
            Title={dets.Title}
            Poster={dets.Poster}
            Year={dets.Year}
            Type={dets.Type}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
