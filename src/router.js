import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Movie from "./views/Movie.vue"
import Genres from './views/Genres.vue'
import MovieDetails from './views/MovieDetails.vue'
import Genre from './views/Genre.vue'
import Trending from './views/Trending.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { 
      path: '/',
      name: 'Trending',
      component: Trending
    },
    {
      path: '/movies',
      name: 'movies',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/movies.vue')
    },
    {
      path: '/movie/:movieId',
      name: 'movie',
      component: Movie,
      props:true,
      children:[
        {
          path:"",
          component:MovieDetails
        }
      ]
    },{
      path:'/genres',
      name: 'genres',
      component:Genres
    },
    {
      path: '/genre/:genreId',
      name: 'Genre',
      props:true,
      component: Genre
    },
    {
      path:'/trending',
      name:"trending",
      component:Trending
    }
  ]
})
