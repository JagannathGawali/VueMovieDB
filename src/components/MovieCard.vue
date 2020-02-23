<template>
    <div class="movie-wrapper" @click="movieClick(movie.id)">
        <div class="movie-image">
            <img
                :src="moviePosterUrl"
                :alt="movie.title"
                :class="!poster ? 'image':'image poster-img' "
                @error="onImageError()"
            >
        </div>
        <div class="movie-info">
            <div class="vote-info"> 
                <div class="like-info">
                    <v-icon class="like-icon">favorite</v-icon>
                    <div>{{movie.vote_average*10}}%</div>
                </div>
                <div class="votes-count">
                    <div>{{tranformVoteCount}}</div>
                    <div>votes</div>
                </div>
            </div>
            <div class="movie-title-wrapper">
                <div class="movie-title">{{movie.title}}</div>
                <div class="card-tags">
                    <span>{{transformDate}}</span> |
                    <span class="movie-lang">{{movie.original_language}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["movie","poster"],
    data(){
        return {
            imageError:false
        }
    },
    computed:{
        tranformVoteCount(){
            let n = this.movie.vote_count,d=1;
            if(Math.floor(n/1000)<=0)
                return n;
            let x=(''+n).length,p=Math.pow;
            d=p(10,d);
            x-=x%3;
            return Math.round(n*d/p(10,x))/d+" kMGTPE"[x/3]
        },
        transformDate(){
            let release_date = this.movie.release_date;
            return new Date(release_date).toShortFormat();
        },
        moviePosterUrl(){
            if(this.imageError)
                return `https://in.bmscdn.com/events/mobile/vertical-noimg.png`;
            let imageName = this.poster ? this.movie.poster_path:this.movie.backdrop_path;
            return `https://image.tmdb.org/t/p/w500/${imageName}`
        }
    },
    methods:{
        movieClick(movieId){
            this.$router.push({ name: 'movie', params: { movieId}})
        },
        onImageError(){
            this.imageError = true;
        }
    },
    created(){
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
    }
}
</script>
<style>
.movie-wrapper{
    cursor:pointer;
    padding:5px 5px !important;
}
.movie-image{
    position:relative;
    display: inline-flex;
}

.movie-title{
    font-weight: 500;
    font-size:14px;
    font-family: Roboto, Arial, sans-serif;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.movie-title-wrapper{
    flex:75%;
    overflow:hidden;
    text-align: center;
}
.movie-lang{
    text-transform: uppercase;
}
.image{
    width: 100%;
    height: 100%;
    border-radius: 4px 4px 0px 0px;
    max-height: 145px;
}

.image1:before { 
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height:100%;
  width: 100%;
  background-color: rgb(230, 230, 230);
  border: 2px dotted rgb(200, 200, 200);
  border-radius: 5px;
}

.image1:after { 
  content: " Broken Image of " attr(alt);
  display: block;
  font-size: 16px;
  font-style: normal;
  font-family: FontAwesome;
  color: rgb(100, 100, 100);
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  text-align: center;
}
.movie-info{
    display:flex;
    text-align: justify;
    background-color: #fff;
    margin-top: -3px;
    border-radius: 0px 0px 4px 4px;
    padding: 10px 5px;
}
.vote-info{
    flex:25%;
    text-align: center;
}
.like-info{
    display: flex;
    justify-content: center;
    align-items: center;
}
.like-icon{
    color:red !important;
    font-size:15px;
    margin-right: 3px;
}
.votes-count,.card-tags{
    font-family:Roboto, sans-serif;
    color: #999;
    font-size:12px;
    margin-top: 2px;
}
.poster-img{
      max-height: 348px;
}
@media only screen and (max-width: 600px) {
    .movie-container{
        padding:10px 0px !important;
    }
}
</style>