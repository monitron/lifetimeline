import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'
import eventEditor from './modules/eventEditor'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [],
    stories: []
  },
  mutations: {
    setEvents(state, events) {
      state.events = events;
    },
    setStories(state, stories) {
      state.stories = stories;
    }
  },
  actions: {
    async loadEverything({commit}) {
      const events = api.getEvents();
      const stories = api.getStories();
      commit('setEvents', await events);
      commit('setStories', await stories);
    }
  },
  modules: {
    eventEditor
  }
})
