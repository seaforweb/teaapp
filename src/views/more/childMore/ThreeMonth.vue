<template>
  <div id="threeMonth">
    <more-static/>
    <more-tab-bar/>
    <div class="content">
      <more-body/>
    </div>
  </div>
</template>

<script>
  import MoreTabBar from "../../../components/content/moreItem/MoreTabBar";
  import MoreStatic from "../../../components/content/moreItem/MoreStatic";
  import MoreBody from "../../../components/content/moreItem/MoreBody";

  export default {
    name: "ThreeMonth",
    components: {
      MoreTabBar,
      MoreStatic,
      MoreBody
    }
  }
</script>

<style scoped>
  .content {
    width: 100%;
    height: auto;
    background-color: lightseagreen;

    position: relative;
    top: 75px;
    left: 0;
    right: 0;
  }
</style>