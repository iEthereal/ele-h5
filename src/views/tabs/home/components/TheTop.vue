<script setup lang="ts">
import type {ISearchRecomment} from "@/types";
import OpSearch from "@/components/OpSearch.vue";
import {ref} from "vue";

interface IProps {
  recomments: ISearchRecomment[]
}

defineProps<IProps>()

const searchValue = ref("test")

const onSearch = (v?: string|number)=>{
  console.log('==== search', v);
}
const onCancel = ()=>{
  console.log("==== cancel");
}
const onClear = ()=>{
  console.log('==== clear')
}
</script>

<template>
  <div class="home-top">
    <div class="top">
      <img class="location-icon" src="@/assets/imgs/index_page/location.png">
      <div class="location">幸福小区</div>
      <img class="shopcart-icon" src="@/assets/imgs/index_page/shopcart.png">
      <img class="comments-icon" src="@/assets/imgs/index_page/comments.png">

    </div>

    <op-search v-model="searchValue" shape="round" background="linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 243))"
               placeholder="世界茶饮 35减2" show-action @search="onSearch" @cancel="onCancel" @clear="onClear">
    </op-search>

    <div class="search-recommend">
      <div v-for="v in recomments" :key="v.value" class="tag">{{ v.label }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-top {
  background: linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 243));
  color: white;

  .top {
    display: flex;
    align-items: center;
    padding: 10px 10px 0 10px;
    line-height: 15px;
    font-size: 15px;
    font-weight: bold;

    .location-icon
    .shopcart-icon
    .comments-icon {
      width: 20px;
      height: 20px;
    }

    .comments-icon {
      margin-left: 10px;
    }

    .location {
      flex: 1;
    }
  }

  .search-recommend {
    display: flex;
    padding: 0 10px 8px;

    .tag {
      font-size: 12px;
      background: rgb(242, 242, 242, 0.3);
      border-radius: 10px;
      padding: 2px 8px;
      margin-right: 10px;
    }
  }
}
</style>

<style lang="scss">
.home-top {
  .van-field__right-icon {
    margin-right: 0;
  }
}
</style>