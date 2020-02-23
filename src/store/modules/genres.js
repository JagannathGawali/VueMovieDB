import axios from 'axios'
const APIURL = `https://api.themoviedb.org/3`;
const APIKey = `59f463b1b416a6627e1ea6095f689dda`;
const state={
    genres:[],
    genreMovies:[]
}
const actions={
    fetchGenres({commit}){
        return axios.get( `${APIURL}/genre/movie/list?api_key=${APIKey}&language=en-US`)
        .then(
            (res) => {
                commit("setGenres",res.data);
            }
        );

    },
    fetchGenreMovies({commit},genreId){
        return axios.get(`${APIURL}/discover/movie?api_key=${APIKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`)
        .then(
            (res) => {
                commit("setGenreMovies",{res:res.data,genreId});
            }
        );
    }
}
const mutations={
    setGenres(state,res){
        state.genres=res.genres
        // state.genreMovies["28"]={};
    },
    setGenreMovies(state,result){
        const {res,genreId} = result;
        state.genreMovies.push({genreId,movies:res.results});
    }
}

const getters={
    getGenres(state){
        return state.genres;
    },
    getGenreMovies(state){
        return function(genreId,count){
            let genre = state.genreMovies.find((genre)=>genre && genre.genreId===genreId);
            let movies = genre ? genre["movies"]:[];
            let filteredMovies = count ? movies.slice(0,count):movies;
            return filteredMovies;
        }
    }
}
export default {
    state,
    actions,
    getters,
    mutations
}