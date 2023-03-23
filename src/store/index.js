import { createStore } from 'vuex'
import router from '@/router';
const state = {};

const getters = {
  user: (state)=>{
    return state.user;
  }
};
const mutations = {
  redirectTo(state ,payload) {
    router.push({
      name: payload.name,
      params: payload.params
    })
  },
  user(state,user) {
    state.user = user;
  }
};
const actions = {
  redirectTo({commit},payload)
  {
    commit("redirectTo",{ name:payload.name,params:payload.params })
  },
  user(context,user)
  {
    context.commit('user',user)
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
