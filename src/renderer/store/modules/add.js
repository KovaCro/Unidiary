const state = {
  title: '',
  day: 0,
  month: 0,
  year: 0,
  desc: '',
  category: '',
  language: '',
  showLine: 0,
  io: false,
  input: '',
  output: '',
  code: ''
}

const mutations = {
  SET_TITLE (state, title) {
    state.title = title
  },
  SET_DAY (state, value) {
    if (value < 10) value = '0' + value
    state.day = value
  },
  SET_MONTH (state, value) {
    if (value < 10) value = '0' + value
    state.month = value
  },
  SET_YEAR (state, value) {
    state.year = value
  },
  SET_DESC (state, desc) {
    state.desc = desc
  },
  SET_CATEGORY (state, category) {
    state.category = category
  },
  SET_LANG (state, lang) {
    state.language = lang
  },
  SET_SHOWLINE (state, payload) {
    state.showLine = payload
  },
  SET_IO (state, input) {
    state.io = input
  },
  SET_INPUT (state, input) {
    state.input = input
  },
  SET_OUTPUT (state, output) {
    state.output = output
  },
  SET_CODE (state, code) {
    state.code = code
  }
}

const actions = {
  setTitle ({commit}, payload) {
    commit('SET_TITLE', payload.title)
  },
  setDay ({commit}, payload) {
    commit('SET_DAY', payload.day)
  },
  setMonth ({commit}, payload) {
    commit('SET_MONTH', payload.month)
  },
  setYear ({commit}, payload) {
    commit('SET_YEAR', payload.year)
  },
  setDesc ({commit}, payload) {
    commit('SET_DESC', payload.desc)
  },
  setCategory ({commit}, payload) {
    commit('SET_CATEGORY', payload.category)
  },
  setLang ({commit}, payload) {
    commit('SET_LANG', payload.lang)
  },
  setShowLine ({commit}, payload) {
    commit('SET_SHOWLINE', payload.value)
  },
  toggleInput ({commit}, payload) {
    commit('SET_IO', payload.toggledIo)
  },
  setInput ({commit}, payload) {
    commit('SET_INPUT', payload.input)
  },
  setOutput ({commit}, payload) {
    commit('SET_OUTPUT', payload.output)
  },
  setCode ({commit}, payload) {
    commit('SET_CODE', payload.code)
  }
}

export default {
  state,
  mutations,
  actions
}
