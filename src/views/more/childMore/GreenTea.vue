<template>
  <div id="greenTea">
    <more-static/>
    <more-tab-bar/>
    <div class="content">
      <p>绿茶</p>
    </div>
  </div>
</template>

<script>
  import MoreTabBar from "../../../components/content/moreItem/MoreTabBar";
  import MoreStatic from "../../../components/content/moreItem/MoreStatic";

  export default {
    name: "GreenTea",
    components: {
      MoreTabBar,
      MoreStatic
    }
  }
</script>

<style scoped>
  .content {
    width: 100%;
    height: auto;
    background-color: lightseagreen;
    display: flex;

    position: fixed;

    top: 75px;
    left: 0;
    right: 0;
  }
</style>