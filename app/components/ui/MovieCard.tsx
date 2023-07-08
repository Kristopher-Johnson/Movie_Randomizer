import React from "react";

const MovieCard = ({
  movieName,
  watched,
  image,
}: {
  movieName: string;
  watched: boolean;
  image: string;
}) => {
  return <div>{movieName}</div>;
};

export default MovieCard;
