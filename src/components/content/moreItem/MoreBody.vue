<template>
  <div id="more-body">
    <div class="text">
      <div class="body" v-for="item in Photos" :key="item.id">
        <img :src="item.idView" alt="" class="img">
        <div class="intro">
          <div>
            <p>品类</p>
            <p>{{item.cate}}</p>
          </div>
          <div>
            <p>嘉兴</p>
            <p>{{item.place}}</p>
          </div>
          <div>
            <p>熟期</p>
            <p>{{item.data}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MoreBody",
    data() {
      return {
        Photos:[
          {id: 0, idView: require("@/assets/img/more/body0.png"),
            cate: '红茶', place: '嘉兴', data: '2月'},
          {id: 1, idView: require("@/assets/img/more/body1.png"),
            cate: '绿茶', place: '温州', data: '1月'},
          {id: 2, idView: require("@/assets/img/more/body2.png"),
            cate: '绿茶', place: '绍兴', data: '3月'},
          {id: 3, idView: require("@/assets/img/more/body3.png"),
            cate: '绿茶', place: '衢州', data: '4月'},
          {id: 4, idView: require("@/assets/img/more/body4.png"),
            cate: '红茶', place: '湖州', data: '1月'},
          {id: 5, idView: require("@/assets/img/more/body5.png"),
            cate: '绿茶', place: '金华', data: '3月'},
          {id: 6, idView: require("@/assets/img/more/body0.png"),
            cate: '红茶', place: '嘉兴', data: '2月'},
          {id: 7, idView: require("@/assets/img/more/body1.png"),
            cate: '绿茶', place: '温州', data: '1月'},
          {id: 8, idView: require("@/assets/img/more/body2.png"),
            cate: '绿茶', place: '绍兴', data: '3月'},
          {id: 9, idView: require("@/assets/img/more/body3.png"),
            cate: '绿茶', place: '衢州', data: '4月'},
          {id: 10, idView: require("@/assets/img/more/body4.png"),
            cate: '红茶', place: '湖州', data: '1月'},
          {id: 11, idView: require("@/assets/img/more/body5.png"),
            cate: '绿茶', place: '金华', data: '3月'}
        ]
      }
    },
    methods: {

  }
  }
</script>

<style scoped>
  #more-body {
    width: 100%;
    height: auto;
    background-color: rgb(250, 250, 250);
  }
  .text {
    width: 320px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    background-color: rgb(250, 250, 250);
  }
  .body {
    width: 150px;
    height: auto;
    display: flex;

    align-items: flex-end;
  }
  .intro {
    width: 80px;
    height: 65px;
    border-radius: 10px;
    background-color: rgb(237, 237, 237);
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    position: relative;
    right: 150px;
    z-index: 5;
  }
  .intro div {
    width: 80px;
    height: 65px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 13px;
    font-weight: bold;
  }
  .img {
    width: 150px;
    height: auto;

    position: relative;
  }
</style>