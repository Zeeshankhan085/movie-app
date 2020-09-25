<template>
  <div>
    <AppHeader />
    <div class="main">
      <TrendingMovies />
      <TopRated />
    </div>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import TrendingMovies from "../components/TrendingMovies.vue";
import TopRated from "../components/TopRated.vue";
export default {
  components: {
    AppHeader,
    TrendingMovies,
    TopRated
  }
};
</script>

<style scoped>
.main {
  padding: 1rem;
}
</style>
