<template>
  <div>
    <h2>Trending Movies</h2>
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
  components: { MovieItem },
  computed: {},
  data() {
    return {
      movies: [],
    };
  },
  methods: {
    async searchTrendingMovies() {
      const response = await api.searchTrendingMovies();
      this.movies = response.data.results;
    },
  },

  created() {
    this.searchTrendingMovies();
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
