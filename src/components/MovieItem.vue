<template>
  <div>
    <li class="movie-item">
      <router-link :to="{ name: 'MovieDetails', params: { id: movie.id } }">
        <span v-if="movie.backdrop_path !== null" class="movie-image">
          <img
            :src="'https://image.tmdb.org/t/p/w400' + movie.backdrop_path"
            alt
          />
        </span>
        <span v-else class="movie-image">
          <img
            :src="'https://image.tmdb.org/t/p/w400' + movie.poster_path"
            alt
          />
        </span>
        <span v-if="movie.title || movie.name" class="title">{{
          movie.name || movie.title
        }}</span>
        <span v-else class="title">{{
          movie.original_title || movie.original_name
        }}</span>
        <span class="overview">{{ movie.overview.substring(0, 40) }}</span>
      </router-link>
    </li>
  </div>
</template>

<script>
export default {
  props: ["movie"],
  methods: {},
};
</script>

<style scoped>
.movie-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  border: 1px solid #ddd;
}
span {
  display: block;
}
.title {
  margin-top: 1em;
  font-size: 1.25rem;
  color: #000;
  opacity: 0.9;
}

.overview {
  margin-top: 0.5em;
  font-size: 0.95rem;
}
</style>
