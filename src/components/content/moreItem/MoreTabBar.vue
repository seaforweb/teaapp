<template>
  <more-bar>
    <more-bar-item path="/recommend">
      <p slot="item-icon">推荐</p>
      <span slot="item-icon-active">推荐</span>
    </more-bar-item>
    <more-bar-item path="/greenTea">
      <p slot="item-icon">绿茶</p>
      <span slot="item-icon-active">绿茶</span>
    </more-bar-item>
    <more-bar-item path="/threeMonth">
      <p slot="item-icon">熟期:3月</p>
      <span slot="item-icon-active">熟期:3月</span>
    </more-bar-item>
    <more-bar-item path="/hangzhou">
      <p slot="item-icon">产地:杭州</p>
      <span slot="item-icon-active">产地:杭州</span>
    </more-bar-item>
    <more-bar-item path="/choose">
      <img src="~/assets/img/more/any-mark.png" slot="item-icon" alt="" @click="chooseClick">
      <img src="~/assets/img/more/any-mark.png" slot="item-icon-active" alt="" @click="chooseClick">
    </more-bar-item>
  </more-bar>
</template>

<script>
  import MoreBar from "../../common/more/MoreBar";
  import MoreBarItem from "../../common/more/MoreBarItem";

  import Choose from "../../../views/more/choose/Choose";

  export default {
    name: "MoreTabBar",
    components: {
      MoreBar,
      MoreBarItem,
      Choose
    },
    methods: {
      chooseClick() {
        this.$router.push('/choose')
      }
    }
  }
</script>

<style scoped>

</style>