<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          aspect-ratio="1.7"
          contain
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ movie.title }}</h3>
            <div> {{ movie.overview }} </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
         <router-view></router-view>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
    props:["movieId"],
    // data(){
    //     return{
    //         movie
    //     }
    // },
    computed:{
        movie(){
          return this.$store.getters.getMovieById;
        }
    },
    created(){
      this.$store.dispatch("fetchMovieById",this.movieId);
    }
}
</script>
