import React from "react";
import Button from "../../components/ui/button";
import classes from "./Randomizer.module.css";

export default function Randomizer() {
  return (
    <div className={classes["page_center"]}>
      <div className={classes.main}>
        <div className={classes["button_div"]}>
          <Button>Randomize</Button>
        </div>

        <div className={classes["radio_div_1"]}>
          <div>
            <input type="radio" id="watched1" name="watched" />
            <label htmlFor="watched1">Watched</label>
          </div>
          <div>
            <input type="radio" id="watched2" name="watched" />
            <label htmlFor="watched2">All</label>
          </div>
        </div>
        <div className={classes["radio_div_2"]}>
          <div>
            <input type="radio" id="genre1" name="genre"></input>
            <label htmlFor="genre1">All</label>
          </div>
          <div>
            <input type="radio" id="genre2" name="genre"></input>
            <label htmlFor="genre2">Horror</label>
          </div>
          <div>
            <input type="radio" id="genre3" name="genre"></input>
            <label htmlFor="genre3">Action</label>
          </div>
          <div>
            <input type="radio" id="genre4" name="genre"></input>
            <label htmlFor="genre4">Sci-fi</label>
          </div>
          <div>
            <input type="radio" id="genre5" name="genre"></input>
            <label htmlFor="genre5">Fantasy</label>
          </div>
        </div>
        {/* <div className={classes.div4}>{<h1>v Advanced v</h1>}</div> */}
      </div>
    </div>
  );
}
