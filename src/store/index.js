import { createStore } from "vuex";
import axios from "axios";
import router from "@/router";
import createPersistedState from "vuex-persistedstate";
import * as cookies from "js-cookie";
// State

const state = {
  user: null,
};

// Getters

const getters = {
  // user: (state) => {
  //   return state.user;
  // },
};

// Mutations

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  redirectTo(state, payload) {
    router.push({
      name: payload.name,
      params: payload.params,
    });
  },
};

// Actions

const actions = {
  redirectTo({ commit }, payload) {
    commit("redirectTo", { name: payload.name, params: payload.params });
  },
  // Login Admin
  async AdminLogin(context, { email, password }) {
    let response = await axios.post("api_dashboard/auth/login", {
      email: email,
      password: password,
    });
    if (response.status == 200) {
      localStorage.setItem("token", response.data.access_token);
      if (response.data.user.role_id == 2) {
        localStorage.setItem(
          "branch_id",
          response.data.user.branchHead_manager[0].id
        );
      }
      context.commit("setUser", response.data.user);
    } else {
      throw new Error("Could not Complete Admin Login ..");
    }
  },

  user(context, user) {
    context.commit("user", user);
  },
};
const modules = {};
export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules,
  plugins: [
    createPersistedState({
      getState: (key) => cookies.getJSON(key),
      setState: (key, state) =>
        cookies.set(key, state, { expires: 3, secure: true }),
    }),
  ],
});
