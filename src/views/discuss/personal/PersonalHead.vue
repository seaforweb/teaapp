<template>
  <div id="personal-head">
    <div class="title">
      <img src="@/assets/img/discuss/back0.png" alt="" @click="goOff()">
      <span>更换头像</span>
    </div>
    <div class="content" v-for=" item in head" :key="item.id">
      <img :src="item.head" alt="">
      <button>更换头像</button>
      <button>保存图片</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PersonalHead",
    data() {
      return {
        head:[
          {id: 0, head:require("@/assets/img/discuss/self_head.png")}
        ]
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
    }
  }
</script>

<style scoped>
  #personal-head {
    width: 100%;
    height: 100vh;
    background-color: rgb(250, 250, 250);
  }

  .title {
    width: 60%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .title img{
    width: auto;
    height: 25px;
  }
  .title span {
    color: black;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
  }

  .content {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .content img {
    width: 200px;
    height: auto;
    margin-bottom: 30px;
  }
  .content button {
    width: 200px;
    height: 35px;
    color: white;
    border: 0px;
    margin: 10px 0 10px 0;
    border-radius: 10px;
    background-color: rgb(76, 147, 113);
  }
</style>