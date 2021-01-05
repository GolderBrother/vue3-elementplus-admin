import { state } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";
export interface State {
  [key: string]: unknown;
}
export default {
  state,
  mutations,
  actions,
  getters: {},
  modules: {}
} as any;
