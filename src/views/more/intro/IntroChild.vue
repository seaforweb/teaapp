<template>
  <div id="intro-child">
    <more-static/>
    <div class="content">
      <more-body/>
    </div>
  </div>
</template>

<script>
  import MoreStatic from "../../../components/content/moreItem/MoreStatic";
  import MoreBody from "../../../components/content/moreItem/MoreBody";

  export default {
    name: "IntroChild",
    components: {
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

    top: 45px;
    left: 0;
    right: 0;
  }
</style>