import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'
import movie from './modules/movie';
import geners from './modules/genres';
import treading from './modules/trending'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movie,
    geners,
    treading
  },
  state: {
    movieList:[]  
  },
  mutations,
  actions,
  getters
})
