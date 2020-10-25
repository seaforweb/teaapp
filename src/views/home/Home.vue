<template>
  <div id="home">
    <div class="top">
      <home-search/>
    </div>
    <div class="content">
      <span>每日精选</span>
      <div>
        <el-carousel height="150px">
          <el-carousel-item v-for="item in imgBox" :key="item.id">
            <img :src="item.idView" alt="" class="image">
          </el-carousel-item>
        </el-carousel>
      </div>
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
    },
    data() {
      return {
        imgBox: [
          {id: 0, idView: require("@/assets/img/home/photo.png")},
          {id: 1, idView: require("@/assets/img/home/photo.png")},
          {id: 2, idView: require("@/assets/img/home/photo.png")},
        ],
      }
    },
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
  }
  .content {
    width: 90%;
    height: 35%;
    display: flex;
    flex-direction: column;
    margin: auto;
  }
   .content .el-carousel__item img {
    height: auto;
    width: 100%;
  }
  .content span {
    width: 100%;
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