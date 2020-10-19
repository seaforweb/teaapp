<template>
  <div id="app">
    <login/>
    <router-view/>
  </div>
</template>

<script>
  import Login from "./views/Login";

  export default {
    name: 'app',
    components: {
      Login,
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
