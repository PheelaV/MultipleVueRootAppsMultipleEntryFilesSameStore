<template>
  App2
  <div>
    {{ state.count }}
  </div>
  <div>
    <button @click="increment">Click</button>
  </div>
</template>

<script>

export default {
  name: 'App2',
  computed: {
    state() {
      return window.customStore.state;
    },
  },
  methods: {
    increment() {
      window.customStore.increment();
    },
  },
};
</script>

<style>
#app2 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border: 1px red solid;
}
</style>
