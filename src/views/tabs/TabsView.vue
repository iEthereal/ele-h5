<script setup lang="ts">
// import { Tabbar, TabbarItem } from "vant";
import { ref, watch } from "vue";
import { RouterView, useRoute, useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()
// 记录当前选择的 TAB
const active = ref(route.name as string)

watch(active,(nv)=>{
    router.push({
        name:nv
    })
})

</script>

<template>
    <RouterView/>
    <VanTabbar v-model="active">
        <VanTabbarItem name="home" icon="home-o">首页</VanTabbarItem>
        <VanTabbarItem name="order" icon="bars">订单</VanTabbarItem>
        <VanTabbarItem name="me" icon="contact">我的</VanTabbarItem>
    </VanTabbar> 
</template>