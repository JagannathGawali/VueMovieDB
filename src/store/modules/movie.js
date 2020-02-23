import axios from 'axios';
const APIKey = "59f463b1b416a6627e1ea6095f689dda";
const APIURL = "https://api.themoviedb.org/3";
const state = {
    movie: {
        details:{},
        videos:{}
    }
}
const mutations = {
    fetchMovieById(state, {movie,videos}) {
        state.movie.details = movie;
        state.movie.videos = videos;
    }
}
const actions = {
    fetchMovieById ({commit}, id) {
        let movieVideos = axios.get(`${APIURL}/movie/${id}/videos?api_key=${APIKey}&language=en-US`)
        let movieDetails = axios.get(`${APIURL}/movie/${id}?api_key=${APIKey}&language=en-US`)
            Promise.all([movieDetails,movieVideos])
            .then((res) => {
                let {
                    data
                }=res[0];
                let {
                    data:videos
                }=res[1];
                commit("fetchMovieById", {movie:data,videos:videos.results});
            });
    }
}

const getters = {
    getMovieById(state){
        return state.movie;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
  }