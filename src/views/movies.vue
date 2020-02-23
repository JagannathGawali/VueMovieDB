<template>
  <div>
   <div class="list">
     <v-layout row wrap justify-center >
            <v-flex
             v-for="movie in movies" :key="movie.id"
             sm3
             class="card-movie"
             @click="movieClick(movie.id)"
            >
                 <MovieCard :movie="movie" :poster="true" />
              <!--<v-card>
                <v-img
                  :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
                  height="450px"
                >
                </v-img>

                <v-card-actions>
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span v-text="movie.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                  <v-btn icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>-->
           
            </v-flex>
          </v-layout>
   </div>
  </div>
</template>

<script>
import MovieCard from '../components/MovieCard.vue'
export default {
  computed: {
    movies() {
      return this.$store.getters.getPopularMovies;
    }
  },
  created() {
    this.$store.dispatch("fetchMovies");
  },
  methods:{
    movieClick(movieId){
      this.$router.push({ name: 'movie', params: { movieId}})
    }
  },
  components:{
    MovieCard
  }
};
</script>
<style>
.list{
  margin: 0px 150px;
}
.card-movie{
  padding: 14px 7px;
}
</style>


