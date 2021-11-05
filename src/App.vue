<template>
    <Header/>
    <div class="mt-3">
        <MainPage/>
    </div>
    <Footer/>
    
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue';
import MainPage from '@/views/MainPage.vue';
import Footer from '@/components/Footer.vue';



@Options({
    components: {
        MainPage,
        Header,
        Footer
    },
})
export default class App extends Vue {}
</script>
<style>
</style>
