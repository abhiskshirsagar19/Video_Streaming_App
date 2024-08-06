import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "994242d9f1295f2c1fbb7f1a626ebd31";
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=994242d9f1295f2c1fbb7f1a626ebd31";
//https://api.themoviedb.org/3/trending/all/day?api_key=994242d9f1295f2c1fbb7f1a626ebd31
const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default { getTrendingVideos, getMovieByGenreId };
