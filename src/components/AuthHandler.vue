<template>
  <div>Please Wait...</div>
</template>

<script>
import qs from "qs";
import { mapActions } from "vuex";
export default {
  methods: { ...mapActions(["finalizeLogIn"]) },
  created() {
    const { approved } = qs.parse(window.location.href);
    this.finalizeLogIn(approved);
  },
};
</script>
