import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: []
  },
  mutations: {
    SAVE_COUNTRIES (state, countries) {
      state.countries = countries
    }
  },
  actions: {
    loadCountries ({commit}) {
      Vue.axios.get('static/data.json').then(result => {
        commit('SAVE_COUNTRIES', result)
      }).catch(error => {
        throw new Error('Error', error)
      })
    }
  },
  modules: {}
})
