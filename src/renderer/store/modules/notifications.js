const state = {
  list: []
}

const mutations = {
  ADD_NOTIFICATION (state, payload) {
    state.list.push(payload.value)
  },
  REMOVE_NOTIFICATION (state, payload) {
    state.list.splice(payload.index, 1)
  }
}

const actions = {
  addNotification ({commit}, payload) {
    commit('ADD_NOTIFICATION', payload)
  },
  removeNotification ({commit}, payload) {
    commit('REMOVE_NOTIFICATION', payload)
  }
}

export default {
  state,
  mutations,
  actions
}
