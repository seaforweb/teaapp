<template>
  <div class="register">
    <div class="top"></div>
    <div class="content">
      <input type="text">
      <p>选择你的头像</p>
      <div>
        <p>昵称</p>
        <input type="text">
      </div>
      <div>
        <p>绑定邮箱</p>
        <input type="text">
      </div>
      <div>
        <p>输入密码</p>
        <input type="password" name="pw" id="pw1">
      </div>
      <div>
        <p>确认密码</p>
        <input type="password" name="pw" id="pw2" onkeyup="validate">
      </div>
      <img src="" alt="">
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
  export default {
    name: "register"
  }
  function validate() {
    var pw1 = document.getElementById("pw1").value;
    var pw2 = document.getElementById("pw2").value;
    if(pw1 == pw2) {
      document.getElementById("tishi").innerHTML="<font color=‘green‘>两次密码相同</font>";
      document.getElementById("submit").disabled = false;
    }
    else {
      document.getElementById("tishi").innerHTML="<font color=‘red‘>两次密码不相同</font>";
      document.getElementById("submit").disabled = true;
    }
  }
</script>

<style scoped>
  .register {
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
    width: 100%;
    height: 60%;
    
  }
  .bottom {
    width: auto;
    height: 30%;
  }
</style>
