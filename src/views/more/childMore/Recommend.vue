<template>
  <div id="recommend">
    <more-static/>
    <more-tab-bar/>
    <div class="nav">
      <el-carousel :interval="4000" type="card" height="120px">
        <el-carousel-item v-for="item in imgBox" :key="item.id">
          <img :src="item.idView" alt="" class="image">
        </el-carousel-item>
      </el-carousel>
      <p>当季新茶</p>
    </div>
    <div class="content">
      <more-body/>
    </div>
  </div>
</template>

<script>
  import MoreTabBar from "../../../components/content/moreItem/MoreTabBar";
  import MoreStatic from "../../../components/content/moreItem/MoreStatic";
  import MoreBody from "../../../components/content/moreItem/MoreBody";
  export default {
    name: "Recommend",
    components: {
      MoreTabBar,
      MoreStatic,
      MoreBody
    },
    data() {
      return {
        imgBox: [
          {id: 0, idView: require("@/assets/img/more/more1.png")},
          {id: 1, idView: require("@/assets/img/more/more2.png")},
          {id: 2, idView: require("@/assets/img/more/more3.png")},
          {id: 3, idView: require("@/assets/img/more/more4.png")},
          {id: 5, idView: require("@/assets/img/more/more5.png")},
        ],
      }
    },
  }
</script>

<style scoped>
  #recommend {
    background-color: rgb(250, 250, 250);
  }
   .nav {
     width: 100%;
     height: auto;
     background-color: rgb(250, 250, 250);
     position: fixed;

     top: 85px;
     right: 0;
     left: 10px;
  }
   .nav p {
     color: black;
     font-size: 15px;
     margin: auto;
     text-align: center;
     position: relative;
     right: 20px;
     bottom: 10px;
   }
  .content {
    width: 100%;
    height: auto;

    position: relative;
    top: 250px;
    left: 0;
    right: 0;
  }
  .el-carousel__item img {
    height: auto;
    width: 75%;
  }
</style>