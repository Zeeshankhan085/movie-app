<template>
  <div>
    <h2>Top Rated Movies</h2>
    <div class="movie-container">
      <MovieItem
        v-for="movie in movies"
        :movie="movie"
        :key="movie.id"
      ></MovieItem>
    </div>
  </div>
</template>

<script>
import api from "../../api/Movie.js";
import MovieItem from "../components/MovieItem.vue";
export default {
  components: {
    MovieItem,
  },
  data() {
    return {
      movies: [],
    };
  },
  methods: {
    async searchTopRatedMovies() {
      const response = await api.searchTopRatedMovies();
      this.movies = response.data.results;
    },
  },

  created() {
    this.searchTopRatedMovies();
  },
};
</script>

<style scoped>
.movie-container {
  padding: 2em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
}
</style>
