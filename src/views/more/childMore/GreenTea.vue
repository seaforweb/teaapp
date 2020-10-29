<template>
  <div id="greenTea">
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
    name: "GreenTea",
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

    position: relative;

    top: 75px;
    left: 0;
    right: 0;
  }
</style>