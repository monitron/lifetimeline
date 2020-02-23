import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: []
  },
  mutations: {
    setEvents(state, events) {
      state.events = events;
    }
  },
  actions: {
    async loadEvents({commit}) {
      commit('setEvents', await api.getEvents());
    }
  },
  modules: {
  }
})
