<template>
  <v-layout row>
    <v-flex class="" xs12 sm10 offset-sm1>
      <div>
        <div v-for="genre in genres" :key="genre.id">
            <GenreList :genre="genre"></GenreList>
        </div>
        <v-footer class="mt-5"></v-footer>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import GenreList from '../components/genreList.vue'
export default {
    created(){
        this.$store.dispatch("fetchGenres");
    },
    computed:{
        genres(){
            return this.$store.getters.getGenres;
        }
    },
    components:{
        GenreList
    }
}
</script>
<style>
.genres{
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    background-color:#ffffff
}

</style>