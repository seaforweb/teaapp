<template>
  <div id="finding">
    <div class="top">
      <img src="~/assets/img/login/back.png" alt="" @click="goOff()">
    </div>
    <div class="content">
      <div>
        <label>绑定邮箱：</label>
        <input type="text" v-model="uMail">
      </div>
      <div>
        <input type="text" placeholder="请输入邮箱收到的验证码" v-model="authCode">
        <button @click="sendClick">点击发送</button>
      </div>
      <div>
        <label>重置密码：</label>
        <input type="password" v-model="Pwd">
      </div>
      <div>
        <label>确认密码：</label>
        <input type="password" v-model="newPwd">
      </div>
    </div>
    <div class="bottom">
      <span @click="Confirm">
        <img src="~/assets/img/login/going.png" alt="">
      </span>
    </div>
  </div>
</template>

<script>
  import Login from "../Login";

  import {userJudgeMail, userAuthCode} from "../../network/finding";

  export default {
    name: "Finding",
    components: {
      Login,
    },
    data() {
      return {
        Pwd: '',
        newPwd: '',
        authCode: '',
        uMail: ''
      }
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
      sendClick() {
        // axios.post('http://10.1.71.155:8000/user/finding', {uMail:this.uMail}).then(res => {
        //   console.log(res);
        //   if(res.data.request.userJudgeMail == '0') {
        //     alert("邮箱未注册！")
        //   }
        // })
        if (this.uMail == '') {
          alert("绑定邮箱不能为空！")
        } else {
          userJudgeMail(this.uMail).then(res => {
            console.log(res);
            if (res.data.result == '1') {
              alert("验证码发送成功，请注意查看！")
            } else {
              alert("邮箱未注册！")
            }
          })
        }
      },
      Confirm() {
        if (this.Pwd != this.newPwd) {
          alert("密码不一致");
        } else if (this.Pwd.length < 6 || this.Pwd.length > 15) {
          alert("密码有误");
        } else if (this.Pwd == this.newPwd
        ) {
          userAuthCode(this.uMail, this.authCode, this.newPwd).then(res => {
            console.log(res);
            if (res.data.result == '1') {
              alert("更改成功");
              this.$router.push('/')
            } else if (res.data.result == '0') {
              alert("验证码错误");
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
  #finding {
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

  .content div {
    width: auto;
    height: auto;
    margin: auto;
    display: flex;
    text-align: center;
  }

  .content div input {
    width: 180px;
    height: 30px;
    border: 0;
    background-color: rgb(228, 228, 228);
    border-radius: 10px;
  }

  .content div button {
    display: inline-block;
    width: 70px;
    text-align: center;
    border-radius: 20px;
  }

  .content div label {
    display: inline-block;
    width: 60px;
    text-align: right;
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
