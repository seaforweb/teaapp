<template>
  <div id="home">
    <h2>寻茶（主页）</h2>
    <main-tab-bar/>
  </div>
</template>

<script>
  import Login from "../Login";

  import MainTabBar from "../../components/content/mainTabbar/MainTabBar";

  export default {
    name: "Home",
    components: {
      Login,
      MainTabBar
    },
  }
</script>

<style scoped>
  #home {
    background-color: rgb(250, 250, 250);
  }
</style>