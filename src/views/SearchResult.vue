<template>
  <div>
    <AppHeader />
    <MovieSearchPage />
  </div>
</template>

<script>
import MovieSearchPage from "../components/MovieSearchPage.vue";
import AppHeader from "../components/AppHeader.vue";
export default {
  components: {
    MovieSearchPage,
    AppHeader,
  },
  created() {
    console.log("hello");
  },
};
</script>

<style scoped></style>
