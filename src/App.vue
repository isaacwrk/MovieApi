<template>
    <div class="font-Oswald text-center mt-1">Moviets</div>
    <MainPage/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MainPage from '@/views/MainPage.vue';


@Options({
    components: {
        MainPage
    },
})
export default class App extends Vue {}
</script>

<style>
</style>
