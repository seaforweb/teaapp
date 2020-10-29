<template>
  <div id="more-item">
    <div class="test" @click="introClick" v-for="item in navText" :key="item.id">
      <div>
        <img :src="item.photo" alt="" class="photo">
        <img :src="item.photo_title" alt="" class="photo_title">
      </div>
      <p>{{item.name}}</p>
    </div>
  </div>
</template>

<script>
  import Intro from "../../../views/more/intro/Intro";

  export default {
    name: "MoreItem",
    components: {
      Intro
    },
    data() {
      return {
        navText:[
          {id:0, photo:require("@/assets/img/home/tea1.png"),
            photo_title:require("@/assets/img/home/tea1_title.png"),
            name:"铁观音"
          },
          {id:1, photo:require("@/assets/img/home/tea2.png"),
            photo_title:require("@/assets/img/home/tea2_title.png"),
            name:"春雨"
          },
          {id:2, photo:require("@/assets/img/home/tea3.png"),
            photo_title:require("@/assets/img/home/tea1_title.png"),
            name:"大吉岭"
          },
          {id:3, photo:require("@/assets/img/home/tea4.png"),
            photo_title:require("@/assets/img/home/tea4_title.png"),
            name:"茉莉"
          },
          {id:4, photo:require("@/assets/img/home/tea5.png"),
            photo_title:require("@/assets/img/home/tea5_title.png"),
            name:"大红袍"
          },
          {id:5, photo:require("@/assets/img/home/tea6.png"),
            photo_title:require("@/assets/img/home/tea6_title.png"),
            name:"白茶"
          },
          {id:6, photo:require("@/assets/img/home/tea7.png"),
            photo_title:require("@/assets/img/home/tea2_title.png"),
            name:"龙井茶"
          },
          {id:7, photo:require("@/assets/img/home/tea8.png"),
            photo_title:require("@/assets/img/home/tea8_title.png"),
            name:"绿茶"
          },
          {id:8, photo:require("@/assets/img/home/tea9.png"),
            photo_title:require("@/assets/img/home/tea9_title.png"),
            name:"！！！"
          }
        ]
      }
    },
    methods: {
      introClick() {
        this.$router.push('/intro')
      }
    }
  }
</script>

<style scoped>
  #more-item {
    width: 100%;
    height: 100%;
    display: flex;
    text-align: center;
    color: black;
    font-size: 15px;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 48px;
  }
  .test {
    margin: 10px;
    width: 80px;
    height: 80px;
    display: flex;
    flex-direction: column;
  }
  .test div {
    width: 75px;
    height: 75px;
    text-align: center;
  }
  .photo {
    width: 75px;
    height: 75px;
    position: relative;
  }
  .photo_title {
    width: 30px;
    height: 15px;
    position: relative;
    bottom: 20px;
    right: 20px;
    z-index: 10;
  }
  .test p {
    font-size: 10px;
  }
</style>