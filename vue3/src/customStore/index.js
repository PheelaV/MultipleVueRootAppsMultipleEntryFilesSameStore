/* eslint-disable no-underscore-dangle */
import { reactive, readonly } from 'vue';

const data = {
  count: 0,
};

class CustomStore {
  constructor() {
    this._state = reactive(data);
    // if (!window.customStore) { window.customStore = this; }
  }

  get state() {
    return readonly(this._state);
  }

  increment() {
    this._state.count += 1;
  }
}

export default new CustomStore();
