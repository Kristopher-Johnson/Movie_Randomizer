import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import classes from "./AllMovies.module.css";
import Chip from "@mui/material/Chip";

interface props {
  MOVIE_NAMES: string[];
  searchQuery: string;
  setSearchQuery: Function;
}

const SearchRenderer = ({
  MOVIE_NAMES,
  searchQuery,
  setSearchQuery,
}: props) => {
  let max: number = 0;

  return (
    <Autocomplete
      inputValue={searchQuery}
      noOptionsText={"No Suggestions Were Found!"}
      onInputChange={(event, newInputValue) => {
        setSearchQuery(newInputValue);
      }}
      className={classes.search}
      autoHighlight={true}
      disablePortal
      id="combo-box"
      options={MOVIE_NAMES}
      sx={{ width: 300 }}
      PaperComponent={({ children }) => (
        <Paper style={{ background: "#1e1e1e", color: "white" }}>
          {children}
        </Paper>
      )}
      renderOption={(props, option) => {
        return (
          <li {...props} key={option}>
            {option}
          </li>
        );
      }}
      renderInput={(params) => {
        {
          max++;
        }
        return <TextField {...params} label="Search" />;
      }}
    />
  );
};
export default SearchRenderer;
