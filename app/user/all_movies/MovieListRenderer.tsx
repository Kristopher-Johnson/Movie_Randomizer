import React, { ReactNode } from "react";
import MovieItem from "./MovieItem";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import MOVIE_LIST from "../../Data/MovieList";

interface props {
  MOVIE_LIST: {
    ID: string;
    MovieName: string;
    Watched: boolean;
    Image: string;
    Genre: string[];
  }[];
  filterQuery: string;
  searchQuery: string;
}

function filterItem(
  Movie: {
    ID: string;
    MovieName: string;
    Watched: boolean;
    Image: string;
    Genre: string[];
  },
  filterQuery: string,
  searchQuery: string
) {
  if (filterQuery == "All") {
    if (Movie.MovieName.toLowerCase().includes(searchQuery.toLowerCase())) {
      return true;
    }
  }
  if (Movie.Genre.includes(filterQuery)) {
    if (Movie.MovieName.toLowerCase().includes(searchQuery.toLowerCase())) {
      return true;
    }
  }
}

function filterList({ MOVIE_LIST, filterQuery, searchQuery }: props) {
  return MOVIE_LIST.map((Movie) => (
    <div key={Movie.ID}>
      <Grid xs={8}>
        {filterItem(Movie, filterQuery, searchQuery) && (
          <MovieItem
            movieName={Movie.MovieName}
            watched={Movie.Watched}
            image={Movie.Image}
          ></MovieItem>
        )}
      </Grid>
    </div>
  ));
}
const MovieListRenderer = ({ MOVIE_LIST, filterQuery, searchQuery }: props) => {
  console.log(filterQuery);
  console.log(searchQuery);

  return (
    <Grid container spacing={2}>
      {filterList({ MOVIE_LIST, filterQuery, searchQuery })}
    </Grid>
  );
};

export default MovieListRenderer;
