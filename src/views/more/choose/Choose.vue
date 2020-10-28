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
        <span v-for="item in place">{{item}}</span>
      </div>
      <p>品类</p>
      <div>
        <span v-for="item in classify">{{item}}</span>
      </div>
      <p>熟期</p>
      <div>
        <span v-for="item in data">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Choose",
    data() {
      return {
        place:[
            '杭州','宁波','舟山','湖州','嘉兴',
            '金华','绍兴','温州','台州','衢州','丽水'
        ],
        classify:[
            '红茶','绿茶','青茶','黄茶','黑茶'
        ],
        data:[
            '1月~2月','2月~3月','3月~4月','1月',
            '2月','3月','4月'
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