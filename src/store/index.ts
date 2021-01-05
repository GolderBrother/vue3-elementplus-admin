import { createStore, Store } from "vuex";
import controls from "./controls/index";
export interface State {
  [key: string]: unknown;
}
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    controls
  }
});
