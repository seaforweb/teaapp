<template>
  <div id="discuss-bar">
    <discuss-bar-item></discuss-bar-item>
  </div>
</template>

<script>
  import DiscussBarItem from "./DiscussBarItem";

  export default {
    name: "DiscussBar",
    components: {
      DiscussBarItem
    }
  }
</script>

<style scoped>
  #discuss-bar {
    width: 100%;
    margin: auto;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-around;
    left: 0;
    right: 0;
    top: 45px;
    z-index: 15;
    background-color: rgb(250, 250, 250);

    box-shadow: 0 1px 1px rgba(100, 100, 100 ,.2);
  }
</style>