<template>
  <div class="more-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "MoreBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default:'red',
      }
    },
    data() {
      return {
        //isActive: true
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .more-bar-item {
    flex: 1;
    display: flex;
    align-items: center;
    height: 30px;
    padding: 5px;
    justify-content: space-around;
  }
  .more-bar-item p {
    font-size: 10px;
    color: black;
  }
  .more-bar-item span {
    font-size: 12px;
    font-weight: bold;
    align-items: center;
    padding: 0 0 3px 0;
    color: black;
    border-bottom: 2px solid rgb(76, 147, 113);
  }
  .more-bar-item img {
    width: auto;
    height: 15px;
    position: relative;
    top: 2px;
  }
</style>