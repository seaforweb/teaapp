<template>
  <div id="study">
    <h2>学茶</h2>
    <main-tab-bar/>
  </div>
</template>

<script>
  import Home from "../home/Home";
  import MainTabBar from "../../components/content/mainTabbar/MainTabBar";

  export default {
    name: "Study",
    components: {
      MainTabBar,
      Home
    }
  }
</script>

<style scoped>

</style>