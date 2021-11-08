<template>
    <div v-if="data.loading" wire:loading class="fixed top-0 left-0 right-0 bottom-0 w-full min-h-screen h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
        <div>
            <div style="border-top-color:transparent"
                 class="w-16 h-16 border-4 border-blue-400 border-double rounded-full animate-spin"></div>
        </div>
        <h2 class="text-center text-white text-xl font-semibold">Carregando...</h2>
        <p class="w-1/3 text-center text-white">Quase lá, estamos nos últimos ajustes :)</p>
    </div>
    <div v-else class="relative flex w-full flex-wrap items-stretch mb-3">
        <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 rounded text-base items-center justify-center w-8 pl-3 py-3">
            <i class="fas fa-search"></i>
        </span>
        <input 
            class="px-3 py-3 placeholder-black-olive text-black-olive relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring focus:ring-mount-pink w-full pl-10 mr-1 ml-2"
            type="text"
            placeholder="Pesquise por filmes e séries.."
            v-model="data.search"
            @keypress="getMovieData">
    </div>
    <div v-if="data.movies.Search == null">
        <p class="text-center text-ghost-white mt-3"> Sua pesquisa será renderizada aqui :)<br>Pesquise por titulos em Inglês, pois a base de dados da API não trás em portugês. </p>
    </div>
    <div class="flex flex-wrap grid grid-cols-6 border border-mount-pink justify-center ml-2 mr-2 pb-1">
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
            search:'',
            loading: true,
            movies:{
                Search:[]
            }
        });

        const getMovieData = async () =>{
            try{
                const resp = await movieServices.getMovie({ s:data.search });
                data.movies = resp;
            } catch(error){
                console.log(error);
            }
        };

        const loadingScreen = () =>{    
            setTimeout(()=>{
                data.loading = false;
            }, 1500);
        };

        onMounted(()=> getMovieData());
        onMounted(()=> loadingScreen());

        return { getMovieData, data, loadingScreen };
    }
});

export default mainPage;
</script>

<style>
</style>