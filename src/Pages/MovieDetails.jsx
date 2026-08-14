import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import MovieDetailList from "../components/MovieDetailList.jsx"

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=40cc9e16&i=${id}`,
        );
        const data = await res.json();
        setMovie(data);

        if (data.Response === "True") {
          setMovie(data);
        } else {
          console.error("API returned an error", data.Error);
        }
      } catch (error) {
        return ("Failed to parse or movie detail", error);
      }
    };
    if (id) {
      getDetail();
    }
  }, [id]);

  return (
   <>
   <MovieDetailList movie={movie}/>
   </>
  );
};

export default MovieDetails;
