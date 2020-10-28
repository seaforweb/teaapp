<template>
  <div id="study-bar">
    <study-bar-item></study-bar-item>
  </div>
</template>

<script>
  import StudyBarItem from "./StudyBarItem";
  export default {
    name: "StudyBar",
    components:{
      StudyBarItem
    }
  }
</script>

<style scoped>
  #study-bar {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    left: 0;
    right: 0;
    top: 5px;
    z-index: 15;
  }
</style>