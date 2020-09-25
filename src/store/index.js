import Vue from "vue";
import Vuex from "vuex";

import SearchResult from "./modules/SearchResult.js";
import Auth from "./modules/Auth.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    SearchResult,
    Auth,
  },
});

export default store;
