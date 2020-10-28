<template>
  <div id="more-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "MoreBar"
  }
</script>

<style scoped>
  #more-bar {
    width: 100%;
    margin: auto;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    top: 45px;
    z-index: 15;
    background-color: rgb(250, 250, 250);

    box-shadow: 0 1px 1px rgba(100, 100, 100 ,.2);
  }
</style>