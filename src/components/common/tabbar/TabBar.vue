<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: rgb(243, 243, 243);

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 15;

    box-shadow: 0 -1px 1px rgba(100,100,100,.2);
  }
</style>
