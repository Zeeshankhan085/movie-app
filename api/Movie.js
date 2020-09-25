import axios from "axios";

const api_key = "596d17e64eed6ffb5df32857d80b5a97";

export default {
  logIn() {
    return axios.get(
      `https://api.themoviedb.org/3/authentication/token/new?api_key=${api_key}`
    );
  },
  searchTrendingMovies() {
    return axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}`
    );
  },

  searchMovies(query, page) {
    return axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&page=${page}`
    );
  },

  searchTopRatedMovies() {
    return axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1&adult=false`
    );
  },

  searchMovieDetails(movieId) {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`
    );
  },
};
