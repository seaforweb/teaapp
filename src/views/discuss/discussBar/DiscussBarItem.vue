<template>
  <div>
    <div class="discuss-bar-item">
      <div class="title">
        <div :class="[indexTitle==0?'chooseTitle':'']" @click="titleClick">推荐</div>
        <div :class="[indexTitle==1?'chooseTitle':'']" @click="zheClick">浙茶</div>
        <div :class="[indexTitle==2?'chooseTitle':'']" @click="longClick">龙井</div>
        <div :class="[indexTitle==3?'chooseTitle':'']" @click="huaClick">花茶</div>
        <div :class="[indexTitle==4?'chooseTitle':'']" @click="caiClick">采茶</div>
        <button @click="btnClick">更多</button>
        <img src="@/assets/img/discuss/push.png" alt="" @click="pushClick">
      </div>
    </div>
  </div>
</template>

<script>
  import Push from "../discussChild/Push";

  export default {
    name: "DiscussBarItem",
    components: {
      Push,
     },
     data() {
        return {
          indexTitle:0,
        }
     },
    methods: {
      pushClick() {
        this.$router.push('/push')
      },
      titleClick() {
        this.indexTitle = 0
      },
      zheClick() {
        this.indexTitle = 1
      },
      longClick() {
        this.indexTitle = 2
      },
      huaClick() {
        this.indexTitle = 3
      },
      caiClick() {
        this.indexTitle = 4
      },
      btnClick() {
        alert("正在发掘，尽情期待！")
      }
    }
  }
</script>

<style scoped>
  .discuss-bar-item {
    width: 100%;
    height: auto;
  }
  .title {
    width: 100%;
    height: 40px;
    display: flex;
    margin: auto;
    font-size: 12px;
    justify-content: space-around;
  }
  .title div {
    width: 30px;
    margin: 10px;
    text-align: center;
  }
  .chooseTitle {
    font-size: 15px;
    font-weight: bold;
    border-bottom: 2px solid #4C9371;
  }
  .title button {
    width: 35px;
    height: 20px;
    margin: 10px 5px 10px 0;
    border-radius: 5px;
    border: 0px;
  }
  .title img {
    width: auto;
    height: 30px;
    margin: auto;
  }
</style>