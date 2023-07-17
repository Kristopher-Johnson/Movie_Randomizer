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

export default function Randomizer() {
  const [isRandomized, setIsRandomized] = useState(false);
  const [notWatched, setNotWatched] = useState("Not Watched");
  const [genre, setGenre] = useState("All");
  const [numberOfMovies, setNumberOfMovies] = useState("3");

  // console.log(isRandomized);
  // console.log(notWatched);
  // console.log(genre);
  // console.log(numberOfMovies);
  const WATCHED_RADIO_LIST = ["Not Watched", "All"];

  function isValid() {
    console.log(numberOfMovies);
    if (numberOfMovies == "" || numberOfMovies == "0") {
      console.log("not valid");
      return (
        <div className={classes.main}>
          <h1>This</h1>
        </div>
      );
    } else {
      setIsRandomized(true);
    }
  }

  function notRandomized() {
    return (
      <div className={classes.main}>
        <div className={classes["button_div"]}>
          <Button onClick={isValid}>Randomize</Button>
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
        <div className={classes["randomized_list"]}>Here</div>
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
