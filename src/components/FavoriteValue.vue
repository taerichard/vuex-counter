<template>
  <h2>Favorite Counter</h2>
  <h3>{{ counter }}</h3>
  <p>We need more...</p>
</template>

<script>
export default {
  computed: {
    counter() {
      //return this.$store.getters.normalizedCounter;
      return this.$store.getters['numbers/normalizedCounter'];
    },
  },
};
</script>
