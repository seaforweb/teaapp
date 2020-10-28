<template>
  <div id="study">
    <div class="top">
      <home-search/>
    </div>
    <div class="body">
      <study-tab-bar/>
    </div>
    <main-tab-bar/>
  </div>
</template>

<script>
  import Home from "../home/Home";
  import MainTabBar from "../../components/content/mainTabbar/MainTabBar";
  import HomeSearch from "../../components/content/homeSearch/HomeSearch";


  import StudyTabBar from "./studyTabBar/StudyTabBar";
  export default {
    name: "MakeTea",
    components: {
      MainTabBar,
      Home,
      HomeSearch,

      StudyTabBar
    },
  }
</script>

<style scoped>
  #study {
    width: 100%;
    height: 100vh;
    background-color: rgb(250, 250, 250);
  }
  .top {
    width: 100%;
    height: 10%;
    margin: auto;
  }
  .body {
    width: 95%;
    height: auto;
    margin: auto;
  }

</style>