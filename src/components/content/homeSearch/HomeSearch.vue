<template>
  <div id="home-search">
    <div>
      <input type="text" placeholder="客官,进来搜点茶呗~" class="search" >
      <img src="~/assets/img/home/search.png" alt="" class="left">
      <img src="~/assets/img/home/camera.png" alt="" class="right">
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeSearch"
  }
</script>

<style scoped>
  #home-search {
    width: 90%;
    height: 100%;
    display: flex;
    margin: auto;
    align-items: center;
  }
  #home-search div {
    width: 250px;
    height: 25px;
  }
  #home-search div input {
    padding-left: 35px;
  }
  .search {
    width: 280px;
    height: 25px;
    border: 0;
    background-color: rgb(246, 246, 246);
    border-radius: 10px;
    margin: auto;
    position: relative;
    z-index: 9;
  }
  .left {
    width: 18px;
    height: 18px;
    position: relative;
    bottom: 22px;
    left: 5px;
    z-index: 10;
  }
  .right {
    width: auto;
    height: 18px;
    position: relative;
    bottom: 22px;
    left: 25px;
    z-index: 10;
  }
</style>