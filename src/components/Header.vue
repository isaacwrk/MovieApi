<template>
    <nav class="flex items-center justify-between flex-wrap bg-erie-black p-6 font-Oswald">
        <div class="flex items-center flex-no-shrink text-ghost-white mr-6">
            <img src="~@/assets/logo.png" style="height:50px">
            <span class="font-light text-2xl tracking-tight">MovieSeacher API</span>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-mount-pink mr-4">
                    Api Documentation
                </a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-mount-pink mr-4">
                    Repository
                </a>
            </div>
        </div>
    </nav>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const Header = defineComponent({
});

export default Header;
</script>

<style>

</style>