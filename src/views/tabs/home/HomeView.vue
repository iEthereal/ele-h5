<script setup lang="ts">
import TheTop from './components/TheTop.vue'
import {useToggle} from "@/use/UseToggle";
import {useAsync} from "@/use/UseAsync";
import {fetchHomePageData} from "@/api/home";
import SearchView from "@/views/search/SearchView.vue";
import type {IHomeInfo} from "@/types";
import OpLoadingView from "@/components/OpLoadingView.vue";

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
      <div>
        {{data}}
      </div>
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
</style>