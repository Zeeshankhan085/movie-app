import api from "../../../api/Movie.js";

const state = {
  currentMovie: null,
};

const getters = {
  currentMovie(state) {
    return state.currentMovie;
  },
};

const mutations = {
  setCurrentMovie(state, movie) {
    state.currentMovie = movie;
  },
};

const actions = {
  // get  Movie details
  async searchMovieDetails({ commit }, movieId) {
    const response = await api.searchMovieDetails(movieId);
    commit("setCurrentMovie", response.data);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
