<template>
  <header class="header">
    <div class="header-inner">
      <div class="logo">
        <a href="#">Movie Search</a>
      </div>

      <form class="form-group" @submit.prevent="submitSearch">
        <input v-model="search" type="text" />
        <div class="search-icon">
          <a href="#" class="btn">
            <i class="fas fa-search" />
          </a>
        </div>
      </form>
      <a v-if="isLoggedIn" @click="logIn" href="#">log in</a>
      <a v-else @click="logOut" href="#">LogOut</a>
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      search: "",
    };
  },

  computed: { ...mapGetters(["currentPage", "isLoggedIn"]) },
  methods: {
    ...mapActions(["logIn", "logOut"]),

    submitSearch() {
      if (this.search == "") {
        this.$router.push({
          name: "SearchResult",
          params: { query: "no query" },
        });
      } else {
        this.$router.push({
          name: "SearchResult",
          params: { query: this.search },
        });
      }
    },
  },
};
</script>

<style scoped>
.header {
  background: #333;
  color: #fff;
  padding: 1em 2em;
}

.header-inner {
  width: 100%;
  display: flex;
  align-items: center;
}

.form-group {
  margin: auto;
  flex-basis: 50%;
  height: 2.5em;
  position: relative;
}

a {
  color: white;
}

.trending {
  color: #fff;
}

.search-icon {
  position: absolute;
  right: 0;
  top: 0;
  width: 3em;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* background: green; */
}
.btn {
  padding: 0.5em 1em;
  margin-left: 1em;
  color: gray;
}

input {
  display: inline-block;
  box-shadow: none;
  padding: 0.25em;
  height: 100%;
  outline: none;
  border-radius: 4px;
  border: none;
  width: 100%;
  font-size: 1.25rem;
}
</style>
