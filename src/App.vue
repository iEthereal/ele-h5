<script setup lang="ts">
import { RouterLink, RouterView ,useRoute,useRouter} from 'vue-router'
import {fetchTest } from '@/api/test'

// fetchTest()
</script>

<template>
    <RouterView/>
</template>

<style>
@import 'normalize.css';

#app {
    /** 字体抗锯齿化，看起来更清晰 */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
