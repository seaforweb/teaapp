<template>
  <div id="recommend">
    <more-static/>
    <more-tab-bar/>
    <div class="swiper">
      <p>轮播图</p>
    </div>
    <div class="content">
      <p>请求图片数据</p>
    </div>
  </div>
</template>

<script>
  import MoreTabBar from "../../../components/content/moreItem/MoreTabBar";
  import MoreStatic from "../../../components/content/moreItem/MoreStatic";
  export default {
    name: "Recommend",
    components: {
      MoreTabBar,
      MoreStatic
    }
  }
</script>

<style scoped>
  .swiper {
    width: 100%;
    height: 150px;
    background-color: aquamarine;
    display: flex;

    position: fixed;

    top: 75px;
    right: 0;
    left: 0;
  }
  .content {
    width: 100%;
    height: auto;
    background-color: lightseagreen;
    display: flex;

    position: fixed;

    top: 225px;
    left: 0;
    right: 0;
  }
</style>