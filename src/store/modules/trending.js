import axios from 'axios';

const state = {
    movieTreading: []
}
const actions = {
    fetchTreadingMedia({commit}, {mediaType,timeWindow}) {
        axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/${timeWindow}?api_key=59f463b1b416a6627e1ea6095f689dda`)
        .then(({data}) => {
            debugger;
            commit("setTreadingMedia", {
                data: data.results,
                mediaType
            });
        });
    }
}
const mutations = {
    setTreadingMedia(state, {
        data,
        mediaType
    }) {    
        state.movieTreading = data;
    }
}
const getters = {
    getTreadingMedia(state) {
        return function(mediaType){
            return state.movieTreading;
        }
    }
}


export default {
    state,
    actions,
    mutations,
    getters
}