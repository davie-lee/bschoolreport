import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    isLoggedIn: false,
    emailErrMsg: null
  },
  mutations: {
    setUser(state, user) {
      if (user) {
        state.user = user;
        state.isLoggedIn = true;
      } else {
        state.user = null;
        state.isLoggedIn = false;
      }
    }
  },
  actions: {
    async logout({ commit }) {
      await firebase.auth().signOut();
      commit("setUser", null);
      router.push("/");
    }
  }
});
