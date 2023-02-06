<template>
  <h1>Logger</h1>
  <ul>
    <li>
      <p :key="log" v-for="log in showLog">{{ log }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    showLog() {
      console.log(this.$store.getters.logMessages);
      return this.$store.getters['numbers/logMessages'];
    },
  },
};
</script>
