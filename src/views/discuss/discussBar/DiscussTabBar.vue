<template>
  <discuss-bar>
  </discuss-bar>
</template>

<script>
  import DiscussBar from "./DiscussBar";
  import DiscussBarItem from "./DiscussBarItem";

  export default {
    name: "DiscussTabBar",
    components: {
      DiscussBar,
      DiscussBarItem,
    },
    // data() {
    //   return {
    //     activeName: 'second'
    //   };
    // },
    // methods: {
    //   handleClick(tab, event) {
    //     console.log(tab, event);
    //   }
    // }
  }
</script>

<style scoped>
</style>