"use client";

import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "../../components/ui/Button";
import classes from "./AllMovies.module.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Backdrop from "@mui/material/Backdrop";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import { useState } from "react";
import MOVIE_LIST from "../../Data/MovieList";
import MovieListRenderer from "./MovieListRenderer";
import AccordianRenderer from "./AccordianRenderer";
import SearchRenderer from "./SearchRenderer";

export default function AllMovies() {
  const GENRES: string[] = [
    "Horror",
    "Action",
    "Sci-fi",
    "Fantasy",
    "Thriller",
  ];

  let MOVIE_NAMES: string[] = [];

  const [movieName, setMovieName] = useState("");
  const [watched, setWatched] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterQuery, setFilterQuery] = useState("All");

  console.log(searchQuery);
  MOVIE_LIST.map((Movie) => MOVIE_NAMES.push(Movie.MovieName));

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const saveMovieHandler = (event: any) => {
    event.preventDefault();
    let index: number = MOVIE_LIST.length + 1;
    console.log(index);
    console.log(movieName);
    console.log(watched);
    MOVIE_LIST.push({
      ID: index.toString(),
      MovieName: movieName,
      Watched: watched,
      Image:
        "data:image/png;base64,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",
      Genre: [],
    });

    console.log(MOVIE_LIST);

    handleClose();
    setMovieName("");
    setWatched(false);
  };

  // const searchFilter = (movieName: string) => {};

  const filterHandler = (Movie: {}) => {};

  const handleOpen = () => {
    if (open == true) {
      return (
        <div>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            // onClick={handleClose}
          >
            <Paper variant="outlined" className={classes["add_movie_backdrop"]}>
              <form className={classes.form} onSubmit={saveMovieHandler}>
                <TextField
                  id="movie-name"
                  label="Movie Name"
                  variant="outlined"
                  className={classes["text_field"]}
                  onChange={(e) => setMovieName(e.target.value)}
                  required
                />
                <FormControlLabel
                  control={
                    <Checkbox onChange={(e) => setWatched(e.target.checked)} />
                  }
                  label="Watched"
                  className={classes.label}
                />
                <div className={classes.buttons}>
                  <div>
                    <Button type="submit">Save</Button>
                  </div>
                  <div>
                    <Button onClick={handleClose}>Cancel</Button>
                  </div>
                </div>
              </form>
            </Paper>
          </Backdrop>
        </div>
      );
    }
  };

  const addMovie = () => {
    setOpen(true);
    console.log("Clicked");
  };

  return (
    <div className={classes.parent}>
      <div className={classes.button}>
        <Button onClick={addMovie}>Add Movie</Button>
        {handleOpen()}
      </div>
      <div className={classes["search_filter"]}>
        <div>
          <SearchRenderer
            MOVIE_NAMES={MOVIE_NAMES}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        <div>
          <AccordianRenderer GENRES={GENRES} setFilterQuery={setFilterQuery} />
        </div>
      </div>
      <div className={classes["movie_item"]}>
        <MovieListRenderer
          MOVIE_LIST={MOVIE_LIST}
          filterQuery={filterQuery}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  );
}
