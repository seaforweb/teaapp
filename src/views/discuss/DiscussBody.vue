<template>
  <div id="discuss-body">
    <div v-for="item in body" :key="item.id">
      <div class="top">
        <div>
          <img :src="item.head" alt="">
          <span>{{item.name}}</span>
        </div>
        <img src="~/assets/img/discuss/follow.png" alt="">
      </div>
      <div class="content">
        <span>{{item.dynamic}}</span>
        <img :src="item.photo" alt="" class="up">
        <img :src="item.title" alt="" class="down">
      </div>
      <div class="bottom">
        <img src="@/assets/img/discuss/good.png" alt="">
        <img src="@/assets/img/discuss/share.png" alt="">
        <img src="@/assets/img/discuss/comment.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DiscussBody",
    data() {
      return {
        body:[
          {id: 0,name:"李星星",
            head:require("@/assets/img/discuss/head0.png"),
            photo:require("@/assets/img/discuss/photo0.png"),
            title:require("@/assets/img/discuss/title0.png"),
            dynamic:'#'+'茶香记忆'+'#',
          },
          {id: 1,name:"李星星",
            head:require("@/assets/img/discuss/head0.png"),
            photo:require("@/assets/img/discuss/photo0.png"),
            title:require("@/assets/img/discuss/title0.png"),
            dynamic:'#'+'茶香记忆'+'#',
          },
          {id: 2,name:"李星星",
            head:require("@/assets/img/discuss/head0.png"),
            photo:require("@/assets/img/discuss/photo0.png"),
            title:require("@/assets/img/discuss/title0.png"),
            dynamic:'#'+'茶香记忆'+'#',
          },
          {id: 3,name:"李星星",
            head:require("@/assets/img/discuss/head0.png"),
            photo:require("@/assets/img/discuss/photo0.png"),
            title:require("@/assets/img/discuss/title0.png"),
            dynamic:'#'+'茶香记忆'+'#',
          },
          {id: 4,name:"李星星",
            head:require("@/assets/img/discuss/head0.png"),
            photo:require("@/assets/img/discuss/photo0.png"),
            title:require("@/assets/img/discuss/title0.png"),
            dynamic:'#'+'茶香记忆'+'#',
          },
        ]
      }
    }
  }
</script>

<style scoped>
  #discuss-body {
    width: 100%;
    height: auto;
    margin: auto;
    background-color: rgb(250, 250, 250);
    margin-bottom: 50px;

    position: relative;
    top: 45px;
  }
  .top {
    width: 90%;
    height: auto;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
  }
  .top div{
    width: auto;
    height: 40px;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
  }
  .top div img {
    width: 40px;
    height: auto;
  }
  .top img {
    width: auto;
    height: 25px;
  }

  .content {
    width: 90%;
    height: auto;
    margin: auto;
    display: flex;
    color: aqua;
    flex-direction: column;
  }
  .up {
    width: 140px;
    height: auto;
  }
  .down {
    width: 45px;
    height: auto;
  }

  .bottom {
    width: 90%;
    height: 30px;
    margin: auto;
    border-bottom: 1px solid rgb(202, 202, 202);
    margin-bottom: 30px;
  }
  .bottom img {
    width: auto;
    height: 20px;
    margin: 5px 10px;
  }
</style>