<template>
    <div class="text-center">
        <h2>{{ movie.Title }}</h2>
        <img width="200" class="mx-auto" :src="movie.Poster"/>
        <p>{{ movie.Year }}</p>
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