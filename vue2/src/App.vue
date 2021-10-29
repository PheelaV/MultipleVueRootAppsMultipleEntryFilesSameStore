<template>
  <div id="app">
    <div>
      App
    </div>
    <div>
      count:{{ count }}
    </div>
    <div>
      <button @click="increment">count++</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.$store.dispatch('increment');
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border: 1px red solid
}
</style>
