<template>
  <h3>Final Counter: {{ counter }}</h3>
</template>

<script>
export default {
  computed: {
    counter() {
      //return this.$store.getters.finalCounter;
      return this.$store.getters['numbers/finalCounter'];
    },
  },
};
</script>
