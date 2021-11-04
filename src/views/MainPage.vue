<template>
    <div class="text-center">
        <input 
            type="text"
            placeholder="Pesquisar.."
            v-model="data.search"
            @keypress="getMovieData">
    </div>
</template>

<script lang='ts'>
import { defineComponent,reactive,onMounted } from 'vue';
import movieServices from '@/services/MovieService';
import MovieSearchDTO from '@/dtos/MovieSearchDTO';

interface NewMovieState{
    search:string,
    loading:boolean,
    movies:MovieSearchDTO | null 
}


const mainPage = defineComponent({
    
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