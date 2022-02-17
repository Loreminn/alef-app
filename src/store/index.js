import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { SET_PERSON_INFO, SET_CHILDREN } from "./mutation_types";
import { saveToLocalStorage } from "../utils/localStorage";

export default new Vuex.Store({
  state: {
    personInfo: {
      name: "",
      age: null,
    },
    children: [],
  },
  mutations: {
    [SET_PERSON_INFO]: (state, info) => {
      state.personInfo = info;
    },
    [SET_CHILDREN]: (state, children) => {
      state.children = children;
      saveToLocalStorage("personState", state);
    },
  },
  getters: {
    personInfo(state) {
      return state.personInfo;
    },
    personChildren(state) {
      return state.children;
    },
  },
});
