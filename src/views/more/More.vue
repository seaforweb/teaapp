<template>
  <recommend/>
<!--  <div id="more">-->
<!--    <more-static/>-->
<!--    <more-tab-bar/>-->
<!--    <div class="content"></div>-->
<!--  </div>-->
</template>

<script>
  import Recommend from "./childMore/Recommend";
  import MoreTabBar from "../../components/content/moreItem/MoreTabBar";
  import MoreStatic from "../../components/content/moreItem/MoreStatic";
  export default {
    name: "More",
    components: {
      MoreTabBar,
      MoreStatic,
      Recommend
    }
  }
</script>

<style scoped>
  /*#more {*/
  /*  width: 100%;*/
  /*  height: 100vh;*/
  /*  background-color: rgb(250, 250, 250);*/
  /*}*/
  /*.content {*/
  /*  width: 100%;*/
  /*  height: 100%;*/
  /*  background-color: green;*/
  /*}*/
</style>