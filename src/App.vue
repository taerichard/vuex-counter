<template>
  <base-container v-if="isAuth" title="Auth">
    <user-auth></user-auth>
    <base-container :title="Vuex">
      <the-counter></the-counter>
      <button @click="addMore">Add 10</button>
      <change-counter></change-counter>
      <favorite-value></favorite-value>
      <multiply-value></multiply-value>
    </base-container>
    <base-container>
      <logger :messages="getLogMessages"></logger>
    </base-container>
  </base-container>
  <base-container v-if="!isAuth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';
import Logger from './components/Logger.vue';
import MultiplyValue from './components/MultiplyValue.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
    Logger,
    MultiplyValue,
  },
  data() {
    return {
      name: 'Richard Tae',
    };
  },
  methods: {
    addMore() {
      //this.$store.commit('increase', { value: 10 });
      // dispatch the action
      this.$store.dispatch('numbers/increase', {
        value: 10,
      });
    },
  },
  computed: {
    isAuth() {
      // return this.$store.getters.isAuthenticated;
      return this.$store.getters['auth/isAuthenticated'];
    },
    getLogMessages() {
      return this.$store.getters.logMessages;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
