<template>
    <div class="relative flex w-full flex-wrap items-stretch mb-3">
        <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 rounded text-base items-center justify-center w-8 pl-3 py-3">
            <i class="fas fa-search"></i>
        </span>
        <input 
            class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full pl-10 mr-1 ml-1"
            type="text"
            placeholder="Pesquise por filmes e séries.."
            v-model="data.search"
            @keypress="getMovieData">
    </div>
    <div v-if="data.search == '' || data.search == null">
        <p class="text-center text-gray-400 mt-3"> Pesquise agora! seus resultados serão renderizados aqui :) </p>
    </div>
    <div class="flex flex-wrap w-full border border-red-500 justify-center">
        <Movie class="mt-3" v-for="movies in data.movies.Search" :movie='movies' :key="movies.imdbID"/>
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
            search:'batman',
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
                data.loading = false;
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