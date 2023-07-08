import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import classes from "./MovieCard.module.css";

const MovieCard = ({
  movieName,
  watched,
  image,
}: {
  movieName: string;
  watched: boolean;
  image: string;
}) => {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} />
        <CardContent className={classes["card_content"]}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            className={classes.typography}
          >
            {movieName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
