<template>
  <v-layout>
  <div class="upper-container">
    <v-flex xs12 sm10>
      <div class="panel-container"> 
        <div class="left-upper-panel">
          <div class="movie-poster">
            <v-dialog
              dark
              v-model="dialog"
              fullscreen="true"
              open-on-hover="true"
            >
              <template v-slot:activator="{ on }">
                 <v-btn
                  v-on="on"
                  class="trailer-play"
                 >
                  <v-icon class="play-icon"  >
                    play_circle_outline
                  </v-icon>
                </v-btn>
              </template>
              <div>
                <div class="wrap-close-icon" @click="dialog = false"><v-icon class="close-icon">close</v-icon></div>
                <div class="iframe-container">
                  <iframe width="100%" height="520px"
                  :src="trailerLink">
                  </iframe>
                </div>
              </div>
             </v-dialog>
            <img
              :src="`https://image.tmdb.org/t/p/w500/${movie.details.poster_path}`"
              aspect-ratio="1.7"
              contain
            ></img>
          </div>
        </div>
        <div class="right-upper-panel">
          <h3 class="headline mb-0">{{ movie.details.title }}</h3>
          <div class="tags">
            <div class="movie-genre" v-for="genre in movie.details.genres">
              {{genre.name}}
            </div>
          </div>
          <div class="movie-time">
            <div class="release-date">
               <v-icon class="icon">calendar_today</v-icon>
               <div>{{transformDate}}</div>
            </div>
            <div class="duration">
              <v-icon class="icon">schedule</v-icon>
              <div>{{`${this.movie.details.runtime}`.minsToHHMMSS()}}</div>
            </div>
          </div>
          <div class="lower-section"> {{ movie.details.overview }} </div>
        </div>
      </div>
          <v-avatar>
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
            >
          </v-avatar>
       
         <router-view></router-view>
    </v-flex>
    </div>
  </v-layout>
</template>
<script>
export default {
    props:["movieId"],
    data () {
      return {
        dialog: false,
      }
    },
    computed:{
        movie(){
          return this.$store.getters.getMovieById;
        },
        transformDate(){
            let release_date = this.movie.details.release_date;
            return new Date(release_date).toShortFormat();
        },
        trailerLink(){
          let key = this.dialog ? (this.movie.videos.length ? this.movie.videos[0].key:""):"";
          return `https://www.youtube.com/embed/${key}`;
        }
    },
    created(){
      this.$store.dispatch("fetchMovieById",this.movieId);
        Date.prototype.toShortFormat = function() {
            var month_names =["Jan","Feb","Mar",
                            "Apr","May","Jun",
                            "Jul","Aug","Sep",
                            "Oct","Nov","Dec"];
            
            var day = this.getDate();
            var month_index = this.getMonth();
            var year = this.getFullYear();
            
            return "" + day + " " + month_names[month_index]+" " + year;
        }
        String.prototype.minsToHHMMSS = function () {
          var mins_num = parseFloat(this, 10); // don't forget the second param
          var hours   = Math.floor(mins_num / 60);
          var minutes = Math.floor((mins_num - ((hours * 3600)) / 60));
          var seconds = Math.floor((mins_num * 60) - (hours * 3600) - (minutes * 60));

          // Appends 0 when unit is less than 10
          if (hours   < 10) {hours   = "0"+hours;}
          if (minutes < 10) {minutes = "0"+minutes;}
          if (seconds < 10) {seconds = "0"+seconds;}
          return hours+':'+minutes+':'+seconds;
      }
    }
}
</script>
<style>
.panel-container{
  display:flex;
  margin-top: 90px;
}
.movie-poster{
  width:200px;
  height:300px;
  position:relative;
}
.movie-poster img{
  width:100%;
  height:100%
}
.upper-container{
    display: flex;
    justify-content: center;
    background-color: #565656;
    color: #fff;
    max-height:250px;
    width: 100%;
}
.right-upper-panel{    
  padding: 50px 0px 0px 40px;
  text-align: start;
}
.movie-genre{
  border: 1px solid #ddd;
  color: #fff;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 400;
  margin-right: 10px;
  display: inline-block;
  text-transform: uppercase;  
}
.tags{
  padding: 11px 0px;
}
.movie-time{
  padding: 6px 0px 8px 0px;
  display:flex;
}
.release-date,.duration{
  display:flex;
  margin-right: 18px;
}
.icon,.play-icon{
  color: white !important;
  font-size: 16px;
  margin-right: 7px;
}
.play-icon{
  font-size: 69px;
  margin: 0px;
  opacity: .75;
}
.play-icon:hover{
    transform: scale(1.1,1.1);
    opacity: 1;
}
.lower-section{
  color: black;
  margin-top: 25px;
}
.trailer-play{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 75px;
  height: 75px;
  z-index: 3;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: transparent !important;
  position: absolute !important;
}
.v-dialog__content--active{
  background: #202020;
}
iframe{
  border:none;
}
.iframe-container{
  width:87vw;
  display: inline-flex;
  flex-direction: column;
}
.wrap-close-icon{
  text-align:end;
}
.close-icon{
  font-size: 30px;
  margin: 20px 10px 20px 0px;
  cursor:pointer;
}
</style>