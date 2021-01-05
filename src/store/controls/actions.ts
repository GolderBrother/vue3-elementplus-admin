import { Store } from "vuex";
import { TOGGLE_COLLAPSE } from "./mutation-types";
import { State } from "./state";

export const actions = {
  toggleCollapse(store: Store<State>) {
    store.commit(TOGGLE_COLLAPSE);
  }
};
