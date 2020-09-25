<template>
  <div class="movie-container">
    <MovieItem
      v-for="movie in movies"
      :movie="movie"
      :key="movie.id"
    ></MovieItem>
    <div class="centered">
      <button @click="loadMore" class="btn">Load more</button>
    </div>
  </div>
</template>

<script>
import MovieItem from "../components/MovieItem.vue";
import api from "../../api/Movie";

export default {
  data() {
    return {
      movies: [],
      currentPage: 1,
    };
  },
  components: {
    MovieItem,
  },
  methods: {
    async searchMovies() {
      const response = await api.searchMovies(
        this.$route.params.query,
        this.currentPage
      );
      console.log(this.movies, "mmovies");
      console.log(response.data.results, "results");
      this.movies.push(...response.data.results);
      console.log(this.movies);
    },
    loadMore() {
      console.log("loading");
      this.currentPage++;
      this.searchMovies();
    },
  },
  created() {
    this.searchMovies();
  },
};
</script>

<style scoped>
.movie-container {
  padding: 2em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  grid-row: 350px;
}

.centered {
  text-align: center;
}

.btn {
  display: inline-block;
}
</style>
