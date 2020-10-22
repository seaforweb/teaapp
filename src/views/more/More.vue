<template>
  <div id="more">
    <more-tab-bar/>
    <div class="content"></div>
  </div>
</template>

<script>
  import MoreTabBar from "../../components/content/moreItem/MoreTabBar";

  export default {
    name: "More",
    components: {
      MoreTabBar,
    }
  }
</script>

<style scoped>
  #more {
    width: 100%;
    height: 100vh;
    background-color: rgb(250, 250, 250);
  }
  .content {
    width: 100%;
    height: 100%;
    background-color: green;
  }
</style>