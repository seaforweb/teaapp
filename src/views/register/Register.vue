<template>
  <div id="register">
    <div class="top">
      <div @click="goOff()"><</div>
    </div>
    <div class="content">
      <input type="text">
      <label>选择你的头像</label>
      <div>
        <label>昵称：</label>
        <input type="text">
      </div>
      <div>
        <label>绑定邮箱：</label>
        <input type="text">
      </div>
      <div>
        <label>输入密码：</label>
        <input type="password" name="pw">
      </div>
      <div>
        <label>确认密码：</label>
        <input type="password" name="pw">
      </div>
      <div>
        <img src="" alt="">
      </div>
    </div>
    <div class="bottom">
      <img src="" alt="">
    </div>
  </div>
</template>

<script>
  import Login from "../Login";

  export default {
    name: "register",
    components: {
      Login,
    },
    methods: {
      goOff() {
        if (window.history.length <= 1) {
          this.$router.push({path:'/'})
          return false
        } else {
          this.$router.go(-1)
        }
      }
    }
  }
</script>

<style scoped>
  #register {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: rgb(247, 247, 247);
    display: flex;
    flex-direction: column;
  }
  .top {
    width: auto;
    height: 10%;
  }
  .content {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    margin: auto;
    flex-wrap: wrap;
    text-align: center;
    font-size: 12px;
  }
  .content input{
    width: 70px;
    height: 70px;
    border: 0;
    background-color: rgb(228, 228, 228);
    border-radius: 50px;
    margin: auto;
  }
  .content div {
    width: auto;
    height: auto;
    margin: auto;
    display: flex;
    text-align: center;
  }
  .content div input {
    width: 200px;
    height: 30px;
    border: 0;
    background-color: rgb(228, 228, 228);
    border-radius: 10px;
  }
  .content div label {
    display:inline-block;
    width:60px;
    text-align:right;
    position: relative;
    top: 8px;
  }
  .bottom {
    width: auto;
    height: 30%;
  }
</style>
