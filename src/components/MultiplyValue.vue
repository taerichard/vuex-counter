<template>
  <h1>Multiplied Value</h1>
  <button @click="multiplyByThree">Multiply by 3</button>
</template>

<script>
export default {
  methods: {
    multiplyByThree() {
      this.$store.dispatch('numbers/multiplyByThree', {
        value: 3,
      });
    },
  },
};
</script>
