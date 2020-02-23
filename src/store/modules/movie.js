import axios from 'axios';

const state = {
    movie: {}
}
const mutations = {
    fetchMovieById(state, movie) {
        state.movie = movie;
    }
}
const actions = {
    fetchMovieById ({commit}, id) {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=59f463b1b416a6627e1ea6095f689dda&language=en-US`)
            .then(({
                data
            }) => {
                commit("fetchMovieById", data);
            });
    }
}

const getters = {
    getMovieById(state){
        debugger
        return state.movie;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
  }