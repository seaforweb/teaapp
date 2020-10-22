<template>
  <div id="home">
    <div class="top">
      <home-search/>
    </div>
    <div class="content">
      <span>每日精选</span>
      <img src="~/assets/img/home/swiper.png" alt="">
    </div>
    <div class="bottom">
      <div>
        <p>各地好茶</p>
        <span @click="moreClick">
          更多
          <img src="~/assets/img/home/next.png" alt="">
        </span>
      </div>
      <more-item/>
    </div>
    <main-tab-bar/>
  </div>
</template>

<script>
  import Login from "../Login";

  import MainTabBar from "../../components/content/mainTabbar/MainTabBar";
  import MoreItem from "../../components/content/moreItem/MoreItem";
  import HomeSearch from "../../components/content/homeSearch/HomeSearch";
  import More from "../more/More";

  export default {
    name: "Home",
    components: {
      Login,

      MainTabBar,
      MoreItem,
      HomeSearch,

      More
    },
    methods: {
      moreClick() {
        this.$router.push('/More')
      }
    }
  }
</script>

<style scoped>
  #home {
    width: 100%;
    height: 100vh;
    background-color: rgb(250, 250, 250);
  }
  .top {
    width: 100%;
    height: 10%;
    margin: auto;
    background-color: #ff8198;
  }
  .content {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    margin: auto;
    background-color: red;
  }
  .content img {
    width: 90%;
    height: 90%;
    margin: auto;
  }
  .content span {
    width: 90%;
    color: black;
    margin: auto;
    font-size: 14px;
  }
  .bottom {
    width: 100%;
    height: auto;
    margin: auto;
  }
  .bottom div {
    width: 90%;
    display: flex;
    margin: auto;
    justify-content: space-between;
    height: 5%;
    background-color: green;
  }
  .bottom p {
    font-size: 14px;
    color: black;
  }
  .bottom span {
    font-size: 12px;
    color: gray;
  }
  .bottom span img {
    width: auto;
    height: 12px;
  }
</style>