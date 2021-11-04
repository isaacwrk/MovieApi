import MovieSearchDTO from "@/dtos/MovieSearchDTO";
import http from '@/plugins/http';
import MovieQuery from '@/queryObjects/MovieQuery';

const movieService = {
    getMovie: async (search: MovieQuery): Promise<MovieSearchDTO> =>{
        const resp = await http.get<MovieSearchDTO>('/movie', { params:search });
        return resp.data;
    }
};

export default movieService;