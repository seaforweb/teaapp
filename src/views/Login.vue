<template>
  <div class="login">
    <div class="top"></div>
    <div class="content">
      <img src="../assets/img/login/login.svg" alt="">
      <input type="text" placeholder="请输入你的邮箱">
      <input type="password" placeholder="请输入密码">
      <img src="../assets/img/login/going.svg" alt="">
    </div>
    <div class="bottom">
      <p>忘记密码</p>
      <p class="text">|</p>
      <p @click="registerClick">用户注册</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  components: {
  },
  methods:{
    registerClick(){
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>
  .login {
    width: 320px;
    height: 568px;
    margin: auto;
    background-color: rgb(247, 247, 247);
    display: flex;
    flex-direction: column;
  }
  .top {
    width: auto;
    height: 10%;
  }
  .content {
    width: 250px;
    height: 75%;
  }
  .content img {
    width: 60px;
    height: 60px;
    position: relative;
    left: 130px;
    margin: 15px 0;
    }
  .content input {
    width: 200px;
    height: 40px;
    background-color: rgb(228, 228, 228);
    border-radius: 10px;
    position: relative;
    left: 65px;
    margin: 10px 0;
  }
  .bottom {
    width: 100%;
    height: 15%;
    font-size: 15px;
    align-items: flex-end;
    justify-content: space-around;
    display: flex;
  }
</style>
