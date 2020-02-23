<template>
    <div class="genre-wrapper">
        <div class="genre-top">
            <div class="gener-heading">{{genre.name}}</div>
            <router-link class="view-all" :to="`/genre/${genre.id}`">View All </router-link>
        </div>
        <v-container class="gener-data" fluid grid-list-xs>
                <v-layout row wrap>
                    <v-flex
                    v-for="movie in movies"
                    :key="movie.id"
                    xs12 sm3
                    class="movie-container"
                    >
                        <MovieCard :movie="movie"/>
                    </v-flex>
                </v-layout>
        </v-container>
    </div>
</template>
<script>
import MovieCard from './MovieCard.vue';
export default {
    props:["genre"],
    computed:{
        movies(){
            let sliceCount = 4;
            let movies1=this.$store.getters.getGenreMovies(this.genre.id,sliceCount);
            console.log(`genre id : ${this.genre.id}`);
            console.log(movies1);
           return movies1;
        }
    },
    methods:{
    },
    created(){
        console.log(`In created lifecycle hook ${this.genre.id}`);
        this.$store.dispatch("fetchGenreMovies",this.genre.id); 
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
    margin : 15px 0px 10px 5px;
    align-items: flex-end;
}
.view-all{
    font-size: 14px;
    text-decoration: none;  
    color: #0078ff;
    font-weight: 500;
    cursor: pointer;
}
</style>