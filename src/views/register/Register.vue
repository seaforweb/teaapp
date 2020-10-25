<template>
  <div id="register">
    <div class="top">
      <img src="~/assets/img/login/back.png" alt="" @click="goOff()">
    </div>
    <div class="content">
      <input type="text" v-model="head">
      <label>选择你的头像</label>
      <div>
        <label>昵称：</label>
        <input type="text" v-model="nickname">
      </div>
      <div>
        <label>绑定邮箱：</label>
        <input type="text" v-model="mail">
      </div>
      <div>
        <label>输入密码：</label>
        <input type="password" placeholder="请输入6~15位密码" v-model="Pwd">
      </div>
      <div>
        <label>确认密码：</label>
        <input type="password" placeholder="请再输入一遍密码" v-model="checkPwd">
      </div>
    </div>
    <div class="bottom">
      <span  @click="Confirm">
        <img src="~/assets/img/login/going.png" alt="">
      </span>
    </div>
  </div>
</template>

<script>
  import Login from "../Login";

  import axios from 'axios'
  export default {
    name: "register",
    components: {
      Login,
    },
    data() {
      return{
        head: '',
        nickname:'',
        mail:'',
        Pwd:'',
        checkPwd:''
      }
    },
    updated() {
      // console.log(this.Pass, this.checkPass);
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
      Confirm() {
        if (this.Pwd != this.checkPwd){
          alert("密码不一致");
        }
        else if (this.Pwd.length <6 || this.Pwd.length > 15){
          alert("密码有误");
        }
        else if (
            this.Pwd == this.checkPwd &&
            this.Pwd.length >=6 &&
            this.Pwd.length <= 15 &&
            this.nickname.length != 0 &&
            this.mail.length != 0
        ){
          axios.post('http://10.1.71.155:8000/user/register',{nickname:this.nickname, mail:this.mail, pwd: this.Pwd}).then(res => {
            console.log(res)
            if (res.data.result == '1') {
              setTimeout(() => {
                alert("恭喜你！注册成功")
                this.$router.push('/')
              }, 2000)
            }
            else if(res.data.result == '0') {
              alert("账号已注册！")
            }
          })
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
  .top img {
    width: 25px;
    height: 25px;
    float: left;
  }
  .content {
    width: 100%;
    height: 50%;
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
    height: 40%;
    margin: auto;
    display: flex;
  }
  .bottom span {
    width: 60px;
    height: 60px;
    display: flex;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    background-color: rgb(76, 147, 113);
  }
  .bottom span img {
    width: 50px;
    height: 50px;
  }
</style>
