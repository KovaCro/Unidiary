const state = {
  directoryPath: '',
  info: {},
  filters: {}
}

const mutations = {
  SET_PATH (state, path) {
    state.directoryPath = path
  },
  SET_INFO (state, info) {
    state.info = info
  },
  ADD_SHORTCUT (state, shortcut) {
    state.info.shortcuts = [...state.info.shortcuts, {shortcut}]
  },
  SET_FILTERS (state, obj) {
    state.filters = obj
  },
  UPDATE_FILTER (state, payload) {
    state.filters[payload.state] = payload.value
  }
}

const actions = {
  setDirectoryPath ({commit}, payload) {
    commit('SET_PATH', payload.path)
  },
  setInfo ({commit}, payload) {
    commit('SET_INFO', payload.info)
  },
  addShortcut ({commit}, payload) {
    commit('ADD_SHORTCUT', payload.shortcut)
  },
  setFilters ({commit}, payload) {
    commit('SET_FILTERS', payload.obj)
  },
  updateFilter ({commit}, payload) {
    commit('UPDATE_FILTER', payload)
  }
}

export default {
  state,
  mutations,
  actions
}
