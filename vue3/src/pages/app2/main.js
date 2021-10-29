import { createApp } from 'vue';
import App from './App.vue';
import CustomStore from '../../customStore';

if (!window.customStore) { window.customStore = CustomStore; }

createApp(App)
// .use(store)
  // .provide({ store: window.customStore })
  .mount('#app2');
