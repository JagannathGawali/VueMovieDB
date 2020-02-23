<template>
    <div class="genre-wrapper">
    <v-layout row>
    <v-flex class="" xs12 sm10 offset-sm1>
        <div class="genre-top">
            <div class="gener-heading">{{genreId}}</div>
        </div>
        <v-container class="gener-data" fluid grid-list-xs>
                <v-layout row wrap>
                    <v-flex
                    v-for="movie in movies"
                    :key="movie.id"
                    xs12 sm3
                    class="movie-container"
                    >
                        <MovieCard :movie="movie" :poster="true" />
                    </v-flex>
                </v-layout>
        </v-container>
    </v-flex>
    </v-layout>        
    </div>
</template>
<script>
import MovieCard from '../components/MovieCard.vue';
export default {
    props:["genreId"],
    computed:{
        movies(){
            let movies1=this.$store.getters.getGenreMovies(this.genreId);
            console.log(movies1);
           return movies1;
        }
    },
    methods:{
    },
    created(){
        console.log(`In created lifecycle hook ${this.genreId}`);
        this.$store.dispatch("fetchGenreMovies",this.genreId); 
    },
    components:{
        MovieCard
    }

}
</script>

<style>
.gener-heading { 
    font-size: 20px;
    text-align: start;
    font-weight: 500;
    font-family: Roboto, Arial, sans-serif;
}
.genre-wrapper{
    margin: 20px;
}
.gener-data{
    padding:0px;
}
.genre-top{
    display:flex;
    justify-content:space-between;
    margin : 15px 0px 10px 5px
}
.view-all{
    font-size: 14px;
    text-decoration: none;  
    color: #0078ff;
    font-weight: 500;
    cursor: pointer;
}
</style>