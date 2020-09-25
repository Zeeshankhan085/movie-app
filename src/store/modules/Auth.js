import api from "../../../api/Movie";
import router from "../../router/index";
const state = {
  approved: null,
};
const getters = {
  isLoggedIn(state) {
    return !state.approved;
  },
};

const mutations = {
  setapproved(state, bool) {
    state.approved = bool;
  },
};

const actions = {
  async logIn({ commit }) {
    const response = await api.logIn();
    const { request_token } = response.data;
    commit("setToken", request_token);
    window.location = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=http://localhost:8080/oauth2/callback`;
  },

  finalizeLogIn: ({ commit }, approved) => {
    commit("setapproved", approved);
    router.push("/");
  },

  logOut: ({ commit }) => {
    commit("setapproved", null);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
