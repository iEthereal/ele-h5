<script setup lang="ts">
import TheTop from './components/TheTop.vue'
import {useToggle} from "@/use/UseToggle";
import SearchView from "@/views/search/SearchView.vue";

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
</script>

<template>
  <div class="home-page">
    <transition name="fade">
      <SearchView v-if="isSearchViewShown" @cancel="toggleSearchView"></SearchView>
    </transition>
    <TheTop :recomments="recomments" @searchClick="toggleSearchView"/>
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