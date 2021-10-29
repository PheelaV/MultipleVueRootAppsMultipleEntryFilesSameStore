<template>
  App
  <div>
    {{ state.count }}
  </div>
  <div>
    <button @click="increment">Click</button>
  </div>
</template>

<script>
import CustomStore from './customStore';

export default {
  name: 'App',
  computed: {
    state() {
      return CustomStore.state;
    },
  },
  methods: {
    increment() {
      CustomStore.increment();
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
  border: 1px red solid;
}
</style>
