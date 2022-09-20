import { createStore } from "vuex";

export default createStore({
  state: {
    route: null,
  },
  mutations: {
    SET_ROUTE(state, route) {
      state.route = route;
    },
  },
  actions: {},
  modules: {},
});
