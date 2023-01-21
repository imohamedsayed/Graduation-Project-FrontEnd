import { createStore } from 'vuex'
import router from '@/router';
const state = {};
const getters = {};
const mutations = {
  redirectTo(state ,payload) {
    router.push({
      name: payload.name,
      params: payload.params
    })
  }
};
const actions = {
  redirectTo({commit},payload)
  {
    commit("redirectTo",{ name:payload.name,params:payload.params })
  }
};
const modules = {};
export default createStore({
  state,
  getters,
  mutations,
  actions ,
  modules
})
