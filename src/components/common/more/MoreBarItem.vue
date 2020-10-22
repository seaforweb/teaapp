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
        default:'black',
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
    justify-content: space-between;
    align-items: center;
    height: 49px;
  }
  .more-bar-item p {
    font-size: 13px;
    color: black;
  }
  .more-bar-item span {
    font-size: 18px;
    color: black;
    border-bottom: 10px solid rgb(76, 147, 113);
  }
  .more-bar-item img {
    width: auto;
    height: 20px;
    float: right;
  }
</style>