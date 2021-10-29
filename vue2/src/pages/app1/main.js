import Vue from 'vue';
import App from './App.vue';
import store from '../../store';

Vue.config.productionTip = false;

if (!window.globalStore) {
  window.globalStore = store;
}

new Vue({
  store: window.globalStore,
  render: (h) => h(App),
}).$mount('#app1');
