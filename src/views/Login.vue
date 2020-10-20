<template>
  <div id="login">
    <div class="top"></div>
    <div class="content">
      <img src="../assets/img/login/login.svg" alt="">
      <input type="text" placeholder="请输入你的邮箱" required="required">
      <input type="password" placeholder="请输入密码" required="required">
      <span @click="homeClick">
        <img src="../assets/img/login/going.png" alt="" >
      </span>
    </div>
    <div class="bottom">
      <span @click="findingClick">忘记密码</span>
      <span class="text">|</span>
      <span @click="registerClick">用户注册</span>
    </div>
  </div>
</template>

<script>
  import Register from "./register/Register";
  import Finding from "./register/Finding";
  import Home from "./home/Home";

export default {
  name: 'Login',
  components: {
    Register,
    Finding,
    Home
  },
  methods:{
    registerClick() {
      this.$router.push('/Register')
    },
    findingClick() {
      this.$router.push('/Finding')
    },
    homeClick() {
      this.$router.push('/Home')
    }
  }
}
</script>

<style scoped>
  #login {
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
    width: auto;
    height: 50%;
    display: flex;
    flex-direction: column;
    margin: auto;
    flex-wrap: wrap;
  }
  .content img {
    width: 60px;
    height: 60px;
    margin: auto;
    }
  .content input {
    width: 200px;
    height: 30px;
    border: 0;
    background-color: rgb(228, 228, 228);
    border-radius: 10px;
    margin: auto;
  }
  .content span {
    width: 60px;
    height: 60px;
    margin: auto;
    display: flex;
    margin-top: 50px;
    border-radius: 40px;
    background-color: rgb(76, 147, 113);
  }
  .content span img {
    width: 50px;
    height: 50px;
  }
  .bottom {
    width: 100%;
    height: 35%;
    font-size: 15px;
    align-items: flex-end;
    justify-content: space-around;
    display: flex;
  }
</style>
