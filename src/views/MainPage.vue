<template>
    <div class="bg-red-200">
        <input 
            type="text"
            placeholder="Pesquisar.."
            v-model="data.search"
            @keypress="getMovieData">
    </div>
</template>

<script lang='ts'>
import { defineComponent,reactive } from 'vue';
import movieServices from '@/services/MovieService';
import MovieSearchDTO from '@/dtos/MovieSearchDTO';

interface NewMovieState{
    search:string,
    loading:boolean,
    movies:MovieSearchDTO[]   
}


const mainPage = defineComponent({
    
    

    setup(){
        const data = reactive({
            search:'Superman',
            loading: true,
            movies:[]
        });
    }
});

export default mainPage;
</script>

<style>

</style>