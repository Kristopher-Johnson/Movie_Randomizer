"use client";

import React, { useState } from "react";
import Button from "../../components/ui/Button";
import classes from "./Randomizer.module.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import GENRES from "../../Data/Genres";
import TextField from "@mui/material/TextField";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Snackbar from "@mui/material/Snackbar";
import MOVIE_LIST from "../../Data/MovieList";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import MovieItem from "../all_movies/MovieItem";

const WATCHED_RADIO_LIST = ["Not Watched", "All"];
let FILTERED_LIST: {
  ID: string;
  MovieName: string;
  Watched: boolean;
  Image: string;
  Genre: string[];
}[] = [];

export default function Randomizer() {
  const [isRandomized, setIsRandomized] = useState(false);
  const [formValues, setFormValues] = useState({
    watched: "Not Watched",
    genre: "All",
    numberOfMovies: "3",
  });
  const [notWatched, setNotWatched] = useState("Not Watched");
  const [genre, setGenre] = useState("All");
  const [numberOfMovies, setNumberOfMovies] = useState("3");
  const [isValid, setIsValid] = useState(true);

  const [reRender, setReRender] = useState(false);

  let noMatches = false;

  function handleClose() {
    // noMatches = false;
    console.log(noMatches);
    setIsValid(true);

    setReRender(false);
  }

  function isValidHandler() {
    console.log(numberOfMovies);
    if (numberOfMovies == "" || numberOfMovies == "0") {
      // console.log("not valid");
      if (isValid) {
        setIsValid(false);
      }
    } else {
      setIsValid(true);
      setIsRandomized(true);

      randomizedList();
      setReRender(!reRender);
    }
  }

  function randomizedList() {
    FILTERED_LIST = [];
    let TEMP_LIST = [];
    for (let i = 0; i < MOVIE_LIST.length; i++) {
      const movie = MOVIE_LIST[i];
      if (genre == "All" || movie.Genre.includes(genre)) {
        if (notWatched == "All") {
          TEMP_LIST.push(movie);
        } else {
          if (movie.Watched == false) {
            TEMP_LIST.push(movie);
          }
        }
      }
    }
    if (Number(numberOfMovies) >= TEMP_LIST.length) {
      FILTERED_LIST = TEMP_LIST;
    } else {
      let index: number[] = [];
      for (let i = 0; i < Number(numberOfMovies); i++) {
        let number = Math.floor(Math.random() * TEMP_LIST.length);

        while (index.includes(number)) {
          // console.log("Re-Roll");
          number = Math.floor(Math.random() * TEMP_LIST.length);
        }

        index.push(number);
        console.log(index);
        console.log(number);
        FILTERED_LIST.push(TEMP_LIST[number]);
      }
    }

    console.log(FILTERED_LIST);
  }

  function renderRandomizedList() {
    if (FILTERED_LIST.length == 0) {
      // {
      //   noMatches = true;
      // }
      return <div></div>;
    } else {
      return FILTERED_LIST.map((Movie) => (
        <div key={Movie.ID}>
          <Grid xs={8} className={classes.card}>
            <MovieItem
              movieName={Movie.MovieName}
              watched={Movie.Watched}
              image={Movie.Image}
            ></MovieItem>
          </Grid>
        </div>
      ));
    }
  }

  function notRandomized() {
    return (
      <div className={classes.main}>
        <Snackbar open={!isValid} autoHideDuration={5000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Please enter how many movies you want to display.
          </Alert>
        </Snackbar>
        {/* <Snackbar
          open={noMatches}
          autoHideDuration={5000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            No movies meet this criteria!
          </Alert>
        </Snackbar> */}
        <div className={classes["button_div"]}>
          <Button onClick={isValidHandler}>Randomize</Button>
        </div>

        <div className={classes["radio_div_1"]}>
          <RadioGroup
            defaultValue={notWatched}
            onChange={(e) => setNotWatched(e.target.value)}
          >
            {WATCHED_RADIO_LIST.map((item) => (
              <FormControlLabel
                value={item}
                control={<Radio />}
                label={item}
                key={item}
                style={{
                  marginBottom: "-5px",
                }}
              />
            ))}
          </RadioGroup>
        </div>
        <div className={classes["radio_div_2"]}>
          <RadioGroup
            defaultValue={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            {GENRES.map((genre) => (
              <FormControlLabel
                value={genre}
                control={<Radio />}
                label={genre}
                key={genre}
                style={{
                  marginBottom: "-5px",
                }}
              />
            ))}
          </RadioGroup>
        </div>
        <div className={classes["num_movies"]}>
          <TextField
            onChange={(e) => setNumberOfMovies(e.target.value)}
            id="outlined-number"
            label="Number of movies"
            type="number"
            defaultValue={numberOfMovies}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </div>
    );
  }
  function randomized() {
    return (
      <div className={classes["randomized_main"]}>
        <div className={classes["randomized_list"]}>
          <Grid className={classes["randomized_grid"]} container spacing={2}>
            {renderRandomizedList()}
          </Grid>
        </div>
        <div className={classes["re_randomize"]}>{notRandomized()}</div>
      </div>
    );
  }

  return (
    <div className={classes["page_center"]}>
      {!isRandomized ? notRandomized() : randomized()}
    </div>
  );
}
