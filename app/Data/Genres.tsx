import MOVIE_LIST from "./MovieList";

const GENRES: string[] = [];

function getGenres() {
  MOVIE_LIST.map((Movie) => {
    for (let i = 0; i < Movie.Genre.length; i++) {
      if (!GENRES.includes(Movie.Genre[i])) {
        GENRES.push(Movie.Genre[i]);
      }
    }
  });
  GENRES.sort();
  GENRES.unshift("All");
}
getGenres();

// const GENRES: string[] = [
//   "All",
//   "Horror",
//   "Action",
//   "Sci-fi",
//   "Fantasy",
//   "Thriller",
// ];

export default GENRES;
