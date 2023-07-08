import React from "react";
import MovieItem from "./MovieItem";

export default function AllMovies() {
  const MOVIE_LIST = [
    {
      MovieName: "Harry Potter and the Philosopher's Stone",
      Watched: false,
      Image:
        "https://www.imdb.com/title/tt0241527/mediaviewer/rm2105413120/?ref_=ext_shr_lnk",
    },
    {
      MovieName: "Harry Potter and the Chamber of Secrets",
      Watched: false,
      Image:
        "https://www.imdb.com/title/tt0295297/mediaviewer/rm3790637825/?ref_=tt_ov_i",
    },
    {
      MovieName: "Harry Potter and the Prisoner of Azkaban",
      Watched: false,
      Image:
        "https://www.imdb.com/title/tt0304141/mediaviewer/rm3241184256/?ref_=tt_ov_i",
    },
    {
      MovieName: "Harry Potter and the Goblet of Fire",
      Watched: false,
      Image:
        "https://www.imdb.com/title/tt0330373/mediaviewer/rm436509952/?ref_=tt_ov_i",
    },
    {
      MovieName: "Harry Potter and the Order of the Phoenix",
      Watched: false,
      Image:
        "https://www.imdb.com/title/tt0373889/mediaviewer/rm3414694144/?ref_=tt_ov_i",
    },
    {
      MovieName: "Harry Potter and the Half-Blood Prince",
      Watched: false,
      Image:
        "https://www.imdb.com/title/tt0417741/mediaviewer/rm282560512/?ref_=tt_ov_i",
    },
    {
      MovieName: "Harry Potter and the Deathly Hallows: Part 1",
      Watched: false,
      Image:
        "https://www.imdb.com/title/tt0926084/mediaviewer/rm706774528/?ref_=tt_ov_i",
    },
    {
      MovieName: "Harry Potter and the Deathly Hallows: Part 2",
      Watched: false,
      Image:
        "https://www.imdb.com/title/tt1201607/mediaviewer/rm1263471360/?ref_=tt_ov_i",
    },
  ];
  return (
    <div>
      {" "}
      {MOVIE_LIST.map((Movie) => (
        <div>
          <MovieItem
            movieName={Movie.MovieName}
            watched={Movie.Watched}
            image={Movie.Image}
          ></MovieItem>
        </div>
      ))}
    </div>
  );
}
