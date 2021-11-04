import axios from "axios";

const http = axios.create({
    baseURL:'https://www.omdbapi.com/',
    params:{
        'apikey':process.env.VUE_APP_MOVIE_KEY,
    }
});

export default http;