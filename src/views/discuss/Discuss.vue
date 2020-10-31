<template>
  <div id="discuss">
    <div class="top">
      <img src="~/assets/img/home/search.png" alt="">
      <input type="text" placeholder="点击搜索">
    </div>
    <discuss-tab-bar/>
    <div class="content_body">
      <img src="@/assets/img/discuss/self_head.png" alt="" class="head">
      <div class="text">
        <div>
          <img src="@/assets/img/discuss/heart.png" alt="">
          <img src="@/assets/img/discuss/notice.png" alt="">
        </div>
        <span @click="selfClick">个人空间 ></span>
      </div>
      <img src="@/assets/img/discuss/self_bac.png" alt="" class="bac">
    </div>
    <discuss-body/>
    <main-tab-bar/>
  </div>
</template>

<script>
  import DiscussTabBar from "./discussBar/DiscussTabBar";
  import DiscussBody from "./DiscussBody";
  import MainTabBar from "../../components/content/mainTabbar/MainTabBar";
  import Personal from "./personal/Personal";

  export default {
    name: "Discuss",
    components: {
      MainTabBar,
      DiscussBody,
      DiscussTabBar,
      Personal
    },
    methods: {
      selfClick() {
        this.$router.push('/personal')
      }
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
    background-color: rgb(250, 250, 250);

    position: fixed;
    z-index: 10;

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
  .content_body {
    width: 95%;
    height: 20%;
    margin: auto;

    position: relative;
    top: 90px;
  }
  .head {
    width: auto;
    height: 60px;

    position: relative;
    left: 20px;
    z-index: 5;
  }
  .text img {
    width: auto;
    height: 20px;
    margin: 10px 15px 20px 15px;
  }
  .text {
    width: 100px;
    height: 80%;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: black;

    position: relative;
    left: 200px;
    bottom: 50px;
    z-index: 5;
  }
  .bac {
    width: 100%;
    height: 85px;
    border-radius: 20px;

    position: relative;
    bottom: 145px;
  }
</style>