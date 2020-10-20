<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.png" alt="">
      <div slot="item-text">寻茶</div>
    </tab-bar-item>
    <tab-bar-item path="/study">
      <img slot="item-icon" src="~assets/img/tabbar/study.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/study_active.png" alt="">
      <div slot="item-text">学茶</div>
    </tab-bar-item>
    <tab-bar-item path="/discuss">
      <img slot="item-icon" src="~assets/img/tabbar/discuss.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/discuss_active.png" alt="">
      <div slot="item-text">论茶</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
