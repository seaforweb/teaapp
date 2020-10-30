<template>
  <discuss-bar>
    <discuss-bar-item path="/recommend">
      <p slot="item-icon">推荐</p>
      <span slot="item-icon-active">推荐</span>
    </discuss-bar-item>
    <discuss-bar-item path="/greenTea">
      <p slot="item-icon">绿茶</p>
      <span slot="item-icon-active">绿茶</span>
    </discuss-bar-item>
    <discuss-bar-item path="/threeMonth">
      <p slot="item-icon">熟期:3月</p>
      <span slot="item-icon-active">熟期:3月</span>
    </discuss-bar-item>
    <discuss-bar-item path="/hangzhou">
      <p slot="item-icon">产地:杭州</p>
      <span slot="item-icon-active">产地:杭州</span>
    </discuss-bar-item>
    <discuss-bar-item path="/choose">
      <img src="~/assets/img/more/any-mark.png" slot="item-icon" alt="" @click="chooseClick">
      <img src="~/assets/img/more/any-mark.png" slot="item-icon-active" alt="" @click="chooseClick">
    </discuss-bar-item>
  </discuss-bar>
</template>

<script>
  import DiscussBar from "./DiscussBar";
  import DiscussBarItem from "./DiscussBarItem";

  export default {
    name: "DiscussTabBar",
    components: {
      DiscussBar,
      DiscussBarItem
    }
  }
</script>

<style scoped>

</style>