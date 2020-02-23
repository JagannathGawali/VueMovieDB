import axios from "axios";

export const fetchMovies = ({
    commit
}) => {
    axios.get("https://api.themoviedb.org/3/list/1?api_key=59f463b1b416a6627e1ea6095f689dda&language=en-US").then(
        (res) => {
            commit("fetchMovies",res.data);
        }
    );
}
