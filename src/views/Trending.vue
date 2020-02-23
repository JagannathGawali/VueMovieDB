<template>
    <div> 
       <v-select
          :items="items"
          label="Media Type"
        ></v-select>
    <v-layout row>
        <v-flex xs12 sm8 offset-sm2>
            <v-card>
                <v-container fluid grid-list-xs>
                <v-layout row wrap>
                    <v-flex
                    v-for="mediaItem in Media"
                    :key="mediaItem.id"
                    xs3
                    >
                    <img
                        :src="`https://image.tmdb.org/t/p/w500/${mediaItem.poster_path}`"
                        alt="lorem"
                        class="image"
                        height="100%"
                        width="100%"
                        @click="showTrailer(mediaItem.id)"
                    >
                    <span>{{mediaItem.title}}</span>
                    </v-flex>
                </v-layout>
        </v-container>   
         </v-card>
    </v-flex>
  </v-layout>
    </div>
</template>
<script>
export default {
    data(){
        return {
             items: ['all', 'movie', 'tv', 'person'],
            mediaType:"tv"
        }
    },
    created(){
        this.$store.dispatch("fetchTreadingMedia",{mediaType:this.mediaType,timeWindow:"week"});
    },
    computed:{
        Media(){
            return this.$store.getters.getTreadingMedia(this.mediaType);
        }
    },
    methods:{
        showTrailer(movieId){
            this.$router.push({ name: 'movie', params: { movieId}})
        }
    }
}
</script>
