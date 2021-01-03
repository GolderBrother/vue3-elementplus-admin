import { Store } from "vuex";
import { staticRoutes } from "../../router/staticRoutes";
import { TOGGLE_COLLAPSE } from "./mutation-types";
export interface State {
  [key: string]: unknown;
}
export default {
  state: {
    isCollapse: false, // 控制菜单展开与折叠
    staticRoutes: staticRoutes
  },
  mutations: {
    [TOGGLE_COLLAPSE](state: State) {
      state.isCollapse = !state.isCollapse;
    }
  },
  actions: {
    toggleCollapse(store: any) {
      store.commit(TOGGLE_COLLAPSE);
    }
  },
  getters: {},
  modules: {}
};
