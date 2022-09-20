import { createStore } from "vuex";

export default createStore({
  state: {
    route: null,
    darkmode: true,
  },
  mutations: {
    SET_ROUTE(state, route) {
      state.route = route;
    },
    SET_DARKMODE(state, dark) {
      state.darkmode = dark;
    },
  },
  actions: {},
  modules: {},
});
