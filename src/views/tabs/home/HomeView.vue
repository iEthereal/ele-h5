<script setup lang="ts">
import TheTop from './components/TheTop.vue'
import {useToggle} from "@/use/UseToggle";
import {useAsync} from "@/use/UseAsync";
import {fetchHomePageData} from "@/api/home";
import SearchView from "@/views/search/SearchView.vue";
import type {IHomeInfo} from "@/types";
import OpLoadingView from "@/components/OpLoadingView.vue";
import ScrollBar from "@/views/tabs/home/components/ScrollBar.vue";
import TheTransformer from "@/views/tabs/home/components/TheTransformer.vue";

const recomments = [
  {
    value: 1,
    label: '牛腩'
  }, {
    value: 2,
    label: '色拉'
  }
]

const [isSearchViewShown, toggleSearchView] = useToggle(false)
const {data,pending} = useAsync(fetchHomePageData,{} as IHomeInfo)
</script>

<template>
  <div class="home-page">
    <transition name="fade">
      <SearchView v-if="isSearchViewShown" @cancel="toggleSearchView"></SearchView>
    </transition>
    <TheTop :recomments="recomments" @searchClick="toggleSearchView"/>

    <OpLoadingView :loading="pending" type="skeleton">
      <div class="home-page__banner">
        <img v-for="v in data.banner" :key="v.imgUrl" :src="v.imgUrl"/>
      </div>
      <TheTransformer :data="data.transformer"></TheTransformer>
      <ScrollBar :data="data.scrollBarInfoList"></ScrollBar>
    </OpLoadingView>
  </div>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
   opacity: 0;
}

.home-page {
  background: var(--op-gray-bg-color);
  padding-bottom: 70px;

  &__banner {
    img {
      width: 100%;
      padding-top: 10px;
      background: white;
    }
  }
  &__activity {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;

    &__swipe {
      border-radius: 8px;
      width: 180px;
      height: 170px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>