<template>
  <div id="personal-head">
    <div class="title">
      <img src="@/assets/img/discuss/back0.png" alt="" @click="goOff()">
      <span>关注</span>
    </div>
    <div class="nav">
      <span :class="[indexTitle==0?'chooseTitle':'']" @click="noticeClick">我的关注</span>
      <span :class="[indexTitle==1?'chooseTitle':'']" @click="followClick">我的粉丝</span>
    </div>
    <div :class="[indexBody==0?'content':'']">
      <div class="search">
        <input type="text" placeholder="搜一搜我的关注" class="search_search" >
        <img src="~/assets/img/discuss/search.png" alt="" class="search_left">
      </div>
      <div class="body" v-for="item in person" :key="item.id">
        <div class="body_left">
          <img :src="item.head" alt="">
          <span>{{item.name}}</span>
        </div>
        <div class="body_right">
          <span>{{item.state}}</span>
        </div>
      </div>
    </div>
    <div :class="[indexBody==1?'content':'']">
      <div class="search">
        <input type="text" placeholder="搜一搜我的粉丝" class="search_search" >
        <img src="~/assets/img/discuss/search.png" alt="" class="search_left">
      </div>
      <div class="body" v-for="item in people" :key="item.id">
        <div class="body_left">
          <img :src="item.head" alt="">
          <span>{{item.name}}</span>
        </div>
        <div class="body_right">
          <span>{{item.state}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Follow",
    data() {
      return {
        indexTitle:0,
        indexBody:0,
        person:[
          {id: 0, head:require("@/assets/img/discuss/head0.png"),name:"一只海星", state:"已关注"},
          {id: 1, head:require("@/assets/img/discuss/head1.png"),name:"一只海星", state:"已关注"},
          {id: 2, head:require("@/assets/img/discuss/head2.png"),name:"一只海星", state:"已关注"},
        ],
        people:[
          {id: 0, head:require("@/assets/img/discuss/head4.png"),name:"瑞克", state:"未关注"},
          {id: 1, head:require("@/assets/img/discuss/head3.png"),name:"魔笛", state:"未关注"},
          {id: 2, head:require("@/assets/img/discuss/head0.png"),name:"牛皮", state:"已关注"},
        ]
      }
    },
    methods: {
      goOff() {
        if (window.history.length <= 1) {
          this.$router.push({path: '/'})
          return false
        } else {
          this.$router.go(-1)
        }
      },
      noticeClick() {
        this.indexTitle = 0
        this.indexBody = 0
      },
      followClick() {
        this.indexTitle = 1
        this.indexBody = 1
      }
    }
  }
</script>

<style scoped>
  #personal-head {
    width: 100%;
    height: 100vh;
    background-color: rgb(250, 250, 250);
  }

  .title {
    width: 55%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .title img{
    width: auto;
    height: 25px;
  }
  .title span {
    color: black;
    font-size: 17px;
    font-weight: bold;
    text-align: center;
  }
  .nav {
    width: 80%;
    height: 8%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: lightseagreen;
  }
  .chooseTitle {
    color: #4C9371;
    border-bottom: 2px solid #4C9371;
  }

  .content {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(250, 250, 250);
    position: fixed;
    top: 85px;
    z-index: 10;
  }
  .search {
    width: 250px;
    height: 25px;
    margin: auto;
    margin-top: 10px;
  }
  .search input {
    padding-left: 35px;
  }
  .search_search {
    width: 250px;
    height: 25px;
    border: 0;
    background-color: rgb(246, 246, 246);
    border-radius: 10px;
    margin: auto;
    position: relative;
    z-index: 9;
  }
  .search_left {
    width: 18px;
    height: 18px;
    position: relative;
    bottom: 22px;
    left: 5px;
    z-index: 10;
  }
  .body {
    width: 220px;
    height: 50px;
    background-color: rgb(226, 226, 226);
    display: flex;
    padding: 5px;
    margin: 15px 0 10px 0;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
  }
  .body_left {
    font-size: 13px;
    display: flex;
    font-weight: bold;
  }
  .body_left img {
    width: 40px;
    height: auto;
  }
  .body_right {
    width: 50px;
    height: 25px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: rgb(246, 246, 246);
  }
</style>