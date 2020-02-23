import axios from 'axios'

const state={
    genreMovies:{}
}
const actions={
    fetchGenreMovies({commit},genreId){
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=59f463b1b416a6627e1ea6095f689dda&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`).then(
            (res) => {
                commit("setGenreMovies",{res:res.data,genreId});
            }
        );
    }
}
const mutations={
    setGenreMovies(state,result){
        const {res,genreId} = result;
        state.genreMovies[genreId]=res.results;
    }
}

const getters={
    getGenreMovies(state){
        return function(genreId){
            return state.genreMovies[genreId];
        }
    }
}
export default {
    state,
    actions,
    getters,
    mutations
}