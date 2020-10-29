<template>
  <div id="discuss-bar">
    <div v-for="item in choice" :key="item.id">
      <span :class="[item.id==0?'chooseChoice':'']" @click="choiceClick">
        {{item.test}}
      </span>
    </div>
    <div class="btn">更多</div>
    <img src="@/assets/img/discuss/push.png" alt="" class="image">
  </div>
</template>

<script>
  export default {
    name: "DiscussBar",
    data() {
      return {
        indexChoice:'0',
        choice:[
          {id: 0, test:"推荐"},
          {id: 1, test:"浙茶"},
          {id: 2, test:"龙井"},
          {id: 3, test:"花茶"},
          {id: 4, test:"采茶"},
        ]
      }
    },
    methods: {
      choiceClick() {
        this.indexChoice = 1
      }
    }
  }
</script>

<style scoped>
  #discuss-bar {
    width: 100%;
    height: 40px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    background-color: aqua;
  }
  span {
    font-size: 13px;
  }
  .chooseChoice {
    font-size: 17px;
    padding-bottom: 6px;
    border-bottom: 1px solid rgb(125,177,152);
  }

  .btn {
    width: 15px;
    height: auto;
    background-color: rgb(247, 247, 247);
    border-radius: 15px;
  }
  .image {
    width: auto;
    height: 40px;
  }
</style>