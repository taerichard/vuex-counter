<template>
  <button @click="addMore">Add One</button>
  <button @click="deleteOne">Delete One</button>
</template>

<script>
export default {
  methods: {
    addMore() {
      this.$store.dispatch('numbers/increment', {
        value: 1,
      });
    },
    deleteOne() {
      // this.$store.dispatch('deleteOne');
      this.$store.dispatch('numbers/deleteOne');
    },
  },
};
</script>
