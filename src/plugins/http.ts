import axios from "axios";

const http = axios.create({
    baseURL:'https://www.omdbapi.com/',
    params:{
        'apikey':'89e85652'
    }
});

export default http;