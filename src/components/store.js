import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    admin: {}
  },
  mutations: {
    addAdmin(state, x) {
      state.admin += x
    }
  }
})
