<template>
  <div id="push">
    <div class="title">
      <img src="@/assets/img/discuss/back0.png" alt="" @click="goOff()">
      <div @click="publishClick"><p>发表</p></div>
    </div>
    <div class="nav">
      <input type="text" placeholder="好想说点什么......">
      <img src="@/assets/img/discuss/join.png" alt="">
    </div>
    <div class="content">
      <button>添加标签</button>
      <button>所在位置</button>
      <button>谁可以看</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Push",
    data() {
      return {

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
      publishClick() {
        alert("发表成功！")
        this.$router.push('/discuss')
      }
    }
  }
</script>

<style scoped>
  #push {
    width: 100%;
    height: 100vh;
    background-color: rgb(250, 250, 250);
  }

  .title {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .title img{
    width: auto;
    height: 25px;
  }
  .title div {
    width: 60px;
    height: 25px;
    display: flex;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
    background-color: #4C9371;
    border-radius: 5px;
    color: white;
    font-size: 14px;
  }

  .nav {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
  }
  .nav input {
    width: 95%;
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    padding: 0 0 60px 20px;
    background-color: rgb(250, 250, 250);
    border: 0px;
  }
  .nav img {
    width: 100px;
    height: auto;
    margin: 10px 0 0 20px;
  }
  .content {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .content button {
    width: 200px;
    height: 35px;
    color: black;
    border: 0px;
    font-size: 13px;
    margin: 10px 0 10px 0;
    border-radius: 10px;
    background-color: rgb(230, 229, 229);
  }
</style>