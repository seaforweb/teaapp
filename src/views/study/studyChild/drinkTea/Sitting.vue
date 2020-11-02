<template>
  <div id="sitting">
    <div class="top">
      <div>
        <img src="~/assets/img/more/back.png" alt="" @click="goOff()">
      </div>
      <span>坐姿</span>
    </div>
    <div class="content"></div>
    <div class="nav">
      <div class="nav_title">
        <div :class="[indexTitle==0?'chooseTitle':'']" @click="withClick"><p>跟着做</p></div>
        <div :class="[indexTitle==1?'chooseTitle':'']" @click="disClick"><p>评论</p></div>
      </div>
      <div class="nav_body">
        <div :class="[indexBody==0?'chooseBody':'']">
          <span>步骤详解</span>
          <div>
            <p>
              在喝茶时我们一般是坐着的，只要保持坐<br><br>
              姿端正即可。可以双膝并拢端坐，也可以<br><br>
              架起二郎腿，但切记不可抖腿。如果茶桌<br><br>
              边准备的是蒲团，可以夹用跪坐或盘腿的<br><br>
              坐姿。
            </p>
          </div>
          <div class="nav_body_next"><p>下一步</p></div>
        </div>
        <div :class="[indexBody==1?'chooseBody':'']">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Sitting",
    data() {
      return {
        indexTitle:0,
        indexBody:0,
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
      withClick() {
        this.indexTitle = 0
        this.indexBody = 0
      },
      disClick() {
        this.indexTitle = 1
        this.indexBody = 1
      }
    }
  }
</script>

<style scoped>
  #sitting {
    width: 100%;
    height: 100vh;
    background-color: rgb(245, 245, 245);
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
    width: 100%;
    height: 30%;
    background-color: #4C9371;
  }

  .nav {
    width: 100%;
    height: 62%;
    background-color: #ff8198;
  }
  .nav_title {
    width: 100%;
    height: 35px;
    color: black;
    display: flex;
    justify-content: left;
    align-items: center;
    background-color: rgb(232, 232, 232);
  }
  .nav_title div {
    margin: 15px;
  }
  .chooseTitle {
    color: #4C9371;
    padding: 3px;
    border-bottom: 2px solid #4C9371;
  }
  .nav_body {
    width: 90%;
    height: 90%;
    margin: auto;
    background-color: rgb(245, 245, 245);
  }
  .nav_body div span {
    font-size: 15px;
    margin: 20px;
    font-weight: bold;
  }
  .nav_body div div {
    margin: 20px;
    font-size: 13px;
  }
</style>