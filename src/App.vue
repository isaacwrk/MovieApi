<template>
    <Header/>
    <MainPage/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue';
import MainPage from '@/views/MainPage.vue';



@Options({
    components: {
        MainPage,
        Header
    },
})
export default class App extends Vue {}
</script>

<style>
</style>
