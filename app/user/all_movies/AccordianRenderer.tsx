import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import RadioGroup from "@mui/material/RadioGroup";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import classes from "./AllMovies.module.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Unstable_Grid2";
import Radio from "@mui/material/Radio";

interface props {
  GENRES: string[];
  setFilterQuery: Function;
}

const AccordianRenderer = ({ GENRES, setFilterQuery }: props) => {
  return (
    <Accordion
      className={classes.filter}
      TransitionProps={{ unmountOnExit: true }}
      style={{
        zIndex: 1,
        // position: "absolute",
        marginRight: "5vw",
        marginTop: "5vh",
        padding: "0",
        // width: "100%",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Filter</Typography>
      </AccordionSummary>
      <AccordionDetails
        style={{
          zIndex: 1,
          position: "absolute",
          marginTop: "0",
          marginBottom: "0",
          padding: "0",
          backgroundColor: "#1e1e1e",
        }}
      >
        <RadioGroup
          onChange={(e) => setFilterQuery(e.target.value)}
          defaultValue="All"
        >
          <FormControlLabel
            value="All"
            control={<Radio />}
            label="All"
            style={{
              paddingLeft: "1vw",
            }}
          />
          <Grid
            container
            spacing={1}
            style={{
              marginLeft: "1vw",
            }}
          >
            {GENRES.map((genre) => (
              <FormControlLabel
                key={genre}
                value={genre}
                control={<Radio />}
                label={genre}
                style={{ paddingRight: "2vw" }}
              />
            ))}
          </Grid>
        </RadioGroup>

        <div></div>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordianRenderer;
