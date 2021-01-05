import { State } from "./state";
import { TOGGLE_COLLAPSE } from "./mutation-types";

export const mutations = {
  [TOGGLE_COLLAPSE](state: State) {
    state.isCollapse = !state.isCollapse;
  }
};
