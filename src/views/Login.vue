<template>
  <div id="login">
    <div class="top"></div>
    <div class="content">
      <img src="../assets/img/login/login.svg" alt="">
      <input type="text" placeholder="请输入你的邮箱" required="required">
      <input type="password" placeholder="请输入密码" required="required">
      <img src="../assets/img/login/going.svg" alt="">
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
  import Finding from "./register/Finding"
export default {
  name: 'Login',
  components: {
    Register,
    Finding
  },
  methods:{
    registerClick() {
      this.$router.push('/Register')
    },
    findingClick() {
      this.$router.push('/Finding')
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
    height: 40px;
    border: 0;
    background-color: rgb(228, 228, 228);
    border-radius: 10px;
    margin: auto;
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
