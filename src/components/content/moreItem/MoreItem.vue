<template>
  <div id="more-item">
    <div class="test">
      <div>
        <img src="~/assets/img/home/tea1.png" alt="" class="photo">
        <img src="~/assets/img/home/tea1_title.png" alt="" class="photo_title">
      </div>
      <p>铁观音</p>
    </div>
    <div class="test">
      <div>
        <img src="~/assets/img/home/tea2.png" alt="" class="photo">
        <img src="~/assets/img/home/tea2_title.png" alt="" class="photo_title">
      </div>
      <p>春雨</p>
    </div>
    <div class="test">
      <div>
        <img src="~/assets/img/home/tea3.png" alt="" class="photo">
        <img src="~/assets/img/home/tea1_title.png" alt="" class="photo_title">
      </div>
      <p>大吉岭</p>
    </div>
    <div class="test">
      <div>
        <img src="~/assets/img/home/tea4.png" alt="" class="photo">
        <img src="~/assets/img/home/tea4_title.png" alt="" class="photo_title">
      </div>
      <p>茉莉</p>
    </div>
    <div class="test">
      <div>
        <img src="~/assets/img/home/tea5.png" alt="" class="photo">
        <img src="~/assets/img/home/tea5_title.png" alt="" class="photo_title">
      </div>
      <p>大红袍</p>
    </div>
    <div class="test">
      <div>
        <img src="~/assets/img/home/tea6.png" alt="" class="photo">
        <img src="~/assets/img/home/tea6_title.png" alt="" class="photo_title">
      </div>
      <p>白茶</p>
    </div>
    <div class="test">
      <div>
        <img src="~/assets/img/home/tea7.png" alt="" class="photo">
        <img src="~/assets/img/home/tea2_title.png" alt="" class="photo_title">
      </div>
      <p>龙井茶</p>
    </div>
    <div class="test">
      <div>
        <img src="~/assets/img/home/tea8.png" alt="" class="photo">
        <img src="~/assets/img/home/tea8_title.png" alt="" class="photo_title">
      </div>
      <p>绿茶</p>
    </div>
    <div class="test">
      <div>
        <img src="~/assets/img/home/tea9.png" alt="" class="photo">
        <img src="~/assets/img/home/tea9_title.png" alt="" class="photo_title">
      </div>
      <p>！！！</p>
    </div>
  </div>
</template>

<script>


  export default {
    name: "MoreItem"
  }
</script>

<style scoped>
  #more-item {
    width: 100%;
    height: 100%;
    display: flex;
    text-align: center;
    color: black;
    font-size: 15px;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: blueviolet;
    margin-bottom: 48px;
  }
  .test {
    margin: 10px;
    width: 80px;
    height: 80px;
    display: flex;
    flex-direction: column;
  }
  .test div {
    width: 75px;
    height: 75px;
    text-align: center;
  }
  .photo {
    width: 75px;
    height: 75px;
    position: relative;
  }
  .photo_title {
    width: 30px;
    height: 15px;
    position: relative;
    bottom: 20px;
    right: 20px;
    z-index: 10;
  }
  .test p {
    font-size: 10px;
  }
</style>