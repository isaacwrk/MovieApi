<template>
    <div class="text-center">
        <input 
            type="text"
            placeholder="Pesquisar.."
            v-model="data.search"
            @keypress="getMovieData">
    </div>
    <Movie v-for="movies in data.movies.Search" :movie='movies' :key="movies.imdbID"/>
    <div>
        <div v-for="movies in data.movies.Search" :movie='movies' :key="movies.imdbID">
            <div class="bg-grey-100">
                <h2>{{ movies.Title }}</h2>
            </div>
            <div>
                <img width="200" :src="movies.Poster" />
                <p>{{ movies.Year }}</p>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
//Services
import { defineComponent,reactive,onMounted } from 'vue';
import movieServices from '@/services/MovieService';
import MovieSearchDTO from '@/dtos/MovieSearchDTO';

//Components
import Movie from "@/components/Movie.vue";

interface NewMovieState{
    search:string,
    loading:boolean,
    movies:MovieSearchDTO 
}


const mainPage = defineComponent({
    components:{
        Movie
    },
    setup(){
        const data = reactive<NewMovieState>({
            search:'Superman',
            loading: true,
            movies:{
                Search:[]
            }
        });

        const getMovieData = async () =>{
            data.loading = true;
            try{
                const resp = await movieServices.getMovie({ s:data.search });
                data.movies = resp;
            } catch(error){
                console.log(error);
            }
        };

        onMounted(()=> getMovieData());

        return { getMovieData, data };
    }
});

export default mainPage;
</script>

<style>

</style>