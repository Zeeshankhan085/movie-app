<template>
  <div class="movie-details">
    <div class="container">
      <div class="movie-info">
        <div class="movie-info--headline">
          <h1>
            {{
              currentMovie.title ||
                currentMovie.original_title ||
                currentMovie.original_name ||
                currentMovie.name
            }}
            ({{ currentMovie.release_date.substring(0, 4) }})
          </h1>
          <h4>{{ currentMovie.tagline }}</h4>
        </div>
      </div>
      <div class="img">
        <span v-if="currentMovie.backdrop_path !== null" class="movie-image">
          <img
            :src="
              'https://image.tmdb.org/t/p/w500' + currentMovie.backdrop_path
            "
            alt
          />
        </span>
        <span v-else class="movie-image">
          <img
            :src="'https://image.tmdb.org/t/p/w500' + currentMovie.poster_path"
            alt
          />
        </span>
      </div>

      <span class="summary">{{ currentMovie.overview }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      movie: "",
    };
  },
  computed: {
    ...mapGetters(["currentMovie"]),
  },
  methods: {
    ...mapActions(["searchMovieDetails", "deselectCurrentMovie"]),
  },
  created() {
    console.log("qwdwf");
    this.searchMovieDetails(this.$route.params.id);
    this.movie = this.currentMovie;
  },
  // beforeDestroy() {
  //   this.deselectCurrentMovie();
  // }
};
</script>

<style scoped>
.movie-details {
  width: 90%;
  margin: auto;
  padding: 2em;
}

.container {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 50%;
  margin: auto;
  align-items: center;
}

.movie-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  /* margin-top: 2em; */
}

.summary {
  margin-top: 1em;
  line-height: 1.6;
}

.img {
  width: 60%;
  margin: 20px auto;
}
</style>
