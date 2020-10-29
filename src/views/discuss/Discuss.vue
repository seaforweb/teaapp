<template>
  <div id="discuss">
    <div class="top">
      <img src="~/assets/img/home/search.png" alt="">
      <input type="text" placeholder="点击搜索">
    </div>
    <div class="content">
      <discuss-bar/>
    </div>
    <discuss-body/>
    <main-tab-bar/>
  </div>
</template>

<script>
  import DiscussBar from "./discussBar/DiscussBar";
  import DiscussBody from "./DiscussBody";
  import MainTabBar from "../../components/content/mainTabbar/MainTabBar";

  export default {
    name: "Discuss",
    components: {
      MainTabBar,
      DiscussBody,
      DiscussBar
    }
  }
</script>

<style scoped>
  #discuss {
    width: 100%;
    height: 100vh;
    background-color: rgb(250, 250, 250);
  }
  .top {
    width: 100%;
    height: 45px;
    background-color: #ff8198;

    /*position: fixed;*/

  }
  .top input {
    width: 280px;
    height: 25px;
    border-radius: 10px;
    border: 0px;
    background-color: rgb(246, 246, 246);
    padding-left: 30px;

    position: fixed;
    top: 10px;
    left: 18px;
    z-index: 5;
  }
  .top img {
    width: auto;
    height: 18px;

    position: fixed;
    top: 15px;
    left: 25px;
    z-index: 10;
  }
  .content {
    width: 95%;
    height: 30%;
    margin: auto;
    background-color: #4C9371;

  }
</style>