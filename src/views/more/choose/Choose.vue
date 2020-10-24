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
        <span>杭州</span>
        <span>宁波</span>
        <span>舟山</span>
        <span>湖州</span>
        <span>嘉兴</span>
        <span>金华</span>
        <span>绍兴</span>
        <span>温州</span>
        <span>台州</span>
        <span>衢州</span>
        <span>丽水</span>
      </div>
      <p>品类</p>
      <div>
        <span>红茶</span>
        <span>绿茶</span>
        <span>青茶</span>
        <span>黄茶</span>
        <span>黑茶</span>
      </div>
      <p>熟期</p>
      <div>
        <span>1月~2月</span>
        <span>2月~3月</span>
        <span>3月~4月</span>
        <span>1月</span>
        <span>2月</span>
        <span>3月</span>
        <span>4月</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Choose",
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