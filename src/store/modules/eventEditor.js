export default {
  namespaced: true,
  state: {
    editing: false,
    eventId: null
  },
  mutations: {
    startEditing(state, eventId) {
      state.editing = true;
      state.eventId = eventId;
    },
    startCreating(state) {
      state.editing = true;
      state.eventId = null;
    },
    cancel(state) {
      state.editing = false;
    }
  }
}