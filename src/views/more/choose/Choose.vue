<template>
  <div id="choose">
    <div class="top">
      <div>
        <img src="~/assets/img/more/back.png" alt="" @click="goOff()">
      </div>
      <span>所有分类</span>
    </div>
    <div class="content">
      <p>最近常用</p>
      <div>
        <span>杭州</span>
        <span>绿茶</span>
      </div>
      <p>产地</p>
      <div>
        <span v-for="item in place" :key="item.id" @click="introClick">{{item.place}}</span>
      </div>
      <p>品类</p>
      <div>
        <span v-for="item in classify" :key="item.id" @click="introClick">{{item.classify}}</span>
      </div>
      <p>熟期</p>
      <div>
        <span v-for="item in data" :key="item.id" @click="introClick">{{item.data}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import IntroChild from "../intro/IntroChild";

  export default {
    name: "Choose",
    components: {
      IntroChild
    },
    data() {
      return {
        place:[
          {id: 0, place:"杭州"},
          {id: 1, place:"宁波"},
          {id: 2, place:"舟山"},
          {id: 3, place:"湖州"},
          {id: 4, place:"嘉兴"},
          {id: 5, place:"金华"},
          {id: 6, place:"绍兴"},
          {id: 7, place:"温州"},
          {id: 8, place:"台州"},
          {id: 9, place:"衢州"},
          {id: 10, place:"丽水"}
        ],
        classify:[
          {id: 0, classify: "红茶"},
          {id: 1, classify: "绿茶"},
          {id: 2, classify: "青茶"},
          {id: 3, classify: "黄茶"},
          {id: 4, classify: "黑茶"}
        ],
        data:[
          {id: 0, data: "1月~2月"},
          {id: 1, data: "2月~3月"},
          {id: 2, data: "3月~4月"},
          {id: 3, data: "1月"},
          {id: 4, data: "2月"},
          {id: 5, data: "3月"},
          {id: 6, data: "4月"}
        ]
      }
    },
    methods: {
      goOff() {
        if (window.history.length <= 1) {
          this.$router.push({path: '/More'})
          return false
        } else {
          this.$router.go(-1)
        }
      },
      introClick() {
        this.$router.push('/IntroChild')
      }
    }
  }
</script>

<style scoped>
  #choose {
    width: 100%;
    height: 100vh;
    background-color: rgb(250, 250, 250);
  }
  .top {
    width: 95%;
    margin: auto;
    height: 45px;
    display: flex;
    align-items: center;
  }
  .top img {
    width: auto;
    height: 20px;
  }
  .top div {
    flex-grow: 1;
  }
  .top span {
    font-size: 20px;
    color: black;
    flex-grow: 1;
  }
  .content {
    width: 90%;
    height: 75%;
    margin: auto;
    display: flex;
    flex-direction: column;
  }
  .content p {
    margin: 10px;
    font-size: 17px;
    font-weight: bold;
  }
  .content div {
    width: 85%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  .content div span {
    padding: 5px 10px 5px 5px;
  }
</style>