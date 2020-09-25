import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import SearchResult from "../views/SearchResult.vue";
import MovieDetails from "../views/MovieDetails.vue";
import AuthHandler from "../components/AuthHandler.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },

  {
    path: "/movies/:id",
    name: "MovieDetails",
    component: MovieDetails,
  },
  {
    path: "/find/:query",
    name: "SearchResult",
    component: SearchResult,
  },
  {
    path: "/oauth2/callback",
    name: "AuthHandler",
    component: AuthHandler,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
