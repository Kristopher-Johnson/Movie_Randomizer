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

const MovieListRenderer = ({ MOVIE_LIST, filterQuery, searchQuery }: props) => {
  console.log(filterQuery);
  console.log(searchQuery);

  function filteredResult() {
    return MOVIE_LIST.map((Movie) => (
      <div key={Movie.ID}>
        <Grid xs={8}>
          {filterQuery == "All" && Movie.Genre.includes(filterQuery) ? (
            <MovieItem
              movieName={Movie.MovieName}
              watched={Movie.Watched}
              image={Movie.Image}
            ></MovieItem>
          ) : (
            Movie.MovieName.includes(searchQuery) && (
              <MovieItem
                movieName={Movie.MovieName}
                watched={Movie.Watched}
                image={Movie.Image}
              ></MovieItem>
            )
          )}
        </Grid>
      </div>
    ));
  }

  return (
    <Grid container spacing={2}>
      {filteredResult()}
    </Grid>
  );
};

export default MovieListRenderer;