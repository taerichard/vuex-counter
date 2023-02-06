<template>
  <button v-if="!isAuth" @click="logIn">Login</button>
  <button v-if="isAuth" @click="logOut">Logout</button>
</template>

<script>
export default {
  methods: {
    logIn() {
      // this.$store.dispatch('logIn', true);
      this.$store.dispatch('auth/logIn', true);
    },
    logOut() {
      this.$store.dispatch('auth/logOut', false);
    },
  },
  computed: {
    isAuth() {
      return this.$store.getters['auth/isAuthenticated'];
    },
  },
};
</script>
