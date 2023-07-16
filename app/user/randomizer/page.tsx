"use client";

import React, { useState } from "react";
import Button from "../../components/ui/Button";
import classes from "./Randomizer.module.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import GENRES from "../../Data/Genres";
import TextField from "@mui/material/TextField";

export default function Randomizer() {
  const [isRandomized, setIsRandomized] = useState(false);

  const WATCHED_RADIO_LIST = ["Not Watched", "All"];

  function notRandomized() {
    return (
      <div className={classes.main}>
        <div className={classes["button_div"]}>
          <Button>Randomize</Button>
        </div>

        <div className={classes["radio_div_1"]}>
          <RadioGroup defaultValue="Not Watched">
            {WATCHED_RADIO_LIST.map((item) => (
              <FormControlLabel
                value={item}
                control={<Radio />}
                label={item}
                style={{
                  marginBottom: "-5px",
                }}
              />
            ))}
          </RadioGroup>
        </div>
        <div className={classes["radio_div_2"]}>
          <RadioGroup defaultValue="All">
            {GENRES.map((genre) => (
              <FormControlLabel
                value={genre}
                control={<Radio />}
                label={genre}
                style={{
                  marginBottom: "-5px",
                }}
              />
            ))}
          </RadioGroup>
        </div>
        <div className={classes["num_movies"]}>
          <TextField
            id="outlined-number"
            label="Number of movies"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </div>
    );
  }
  function randomized() {
    return <div className={classes.main}></div>;
  }

  return (
    <div className={classes["page_center"]}>
      {!isRandomized ? notRandomized() : randomized()}
    </div>
  );
}
