<template>
  <div class="top">
    <img src="~/assets/img/more/back.png" alt=""  @click="goOff()">
    <p>更多</p>
    <img src="~/assets/img/more/search.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "MoreStatic",
    methods: {
      goOff() {
        if (window.history.length <= 1) {
          this.$router.push({path: '/More'})
          return false
        } else {
          this.$router.go(-1)
        }
      },
    }
  }
</script>

<style scoped>
  .top {
    width: auto;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(250, 250, 250);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 15;
  }
  .top img {
    width: auto;
    height: 20px;
  }
  .top p {
    font-size: 20px;
    color: black;
  }
</style>