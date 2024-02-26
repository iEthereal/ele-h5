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
import CountDown from "@/views/tabs/home/components/CountDown.vue";
import OpSwipe from "@/components/swipe/OpSwipe";
import OpSwipeItem from "@/components/swipe/OpSwipeItem";
import {PRIMARY_COLOR, TRANSPARENT} from "@/config";
import {ref} from "vue";
import {HOME_TABS} from "@/views/tabs/home/config";

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
const {data, pending} = useAsync(fetchHomePageData, {} as IHomeInfo)

const tabBackgruondColor = ref(TRANSPARENT)
const onTabScroll = ({isFixed}: { isFixed: boolean }) => {
  tabBackgruondColor.value = isFixed ? 'white' : TRANSPARENT
}
</script>

<template>
  <div class="home-page">
    <transition name="fade">
      <SearchView v-if="isSearchViewShown" @cancel="toggleSearchView"></SearchView>
    </transition>
    <div v-show="!isSearchViewShown">
      <TheTop :recomments="recomments" @searchClick="toggleSearchView"/>

    <OpLoadingView :loading="pending" type="skeleton">
      <div class="home-page__banner">
        <img v-for="v in data.banner" :key="v.imgUrl" :src="v.imgUrl"/>
      </div>
      <TheTransformer :data="data.transformer"></TheTransformer>
      <ScrollBar :data="data.scrollBarInfoList"></ScrollBar>
      <div class="home-page__activity">
        <CountDown :data="data.countdown"></CountDown>
        <OpSwipe class="home-page__activity__swipe" :autoplay="3000" :loop="true">
          <op-swipe-item v-for="v in data.activities" :key="v">
            <img :src="v"/>
          </op-swipe-item>
        </OpSwipe>
      </div>

      <VanTabs
          sticky
          offset-top="54px"
          :color="PRIMARY_COLOR"
          :background="tabBackgruondColor"
          @scroll="onTabScroll"
      >
        <VanTab v-for="v in HOME_TABS" :key="v.value" :title="v.title">
          <component :is="v.component"></component>
        </VanTab>
      </VanTabs>
    </OpLoadingView>

    </div>

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