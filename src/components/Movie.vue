<template>
    <div class="text-center bg-dark-purple hover:text-mount-pink text-ghost-white rounded mr-1 ml-1 w-86">
        <h2>{{ movie.Title }}</h2>
        <img width="200"  class="mx-auto h-56 object-contain" :src="movie.Poster"/>
        <p>Year:{{ movie.Year }} / {{movie.Type}}</p>
    </div>

</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const movie = defineComponent({
    props:{
        movie:{
            type:Object,
            required:true
        }
    }
});

export default movie;
</script>

<style>
</style>