<template>
    <div class="bg-grey-100">
        <h2>{{ movies.Title }}</h2>
    </div>
    <div>
        <img width="200" :src="movies.Poster" />
        <p>{{ movie.Year }}</p>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const movie = defineComponent({
    
});

export default movie;
</script>

<style>

</style>