import MovieCard from "../../components/ui/MovieCard";
import React from "react";

const MovieItem = ({
  movieName,
  watched,
  image,
}: {
  movieName: string;
  watched: boolean;
  image: string;
}) => {
  return (
    <MovieCard
      movieName={movieName}
      watched={watched}
      image={image}
    ></MovieCard>
  );
};

export default MovieItem;
