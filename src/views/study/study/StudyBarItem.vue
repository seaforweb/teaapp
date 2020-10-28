<template>
  <div>
    <div class="study-bar-item">
      <div class="title">
        <div :class="[indexTitle==0?'chooseTitle':'']" @click="makeClick">泡茶</div>
        <div>|</div>
        <div :class="[indexTitle==1?'chooseTitle':'']"  @click="drinkClick">饮茶</div>
      </div>

      <div class="item">
        <h4>浙江十大名茶</h4>
        <div class="nav">
          <div class="content">
            <img src="@/assets/img/study/1.png" alt="">
            <div class="text">
              <div class="text_top">
                <h4>大佛龙井</h4>
                <span @click="showClick=true">{{message}}</span>
              </div>
              <div class="text_content">
                <p>佛教强调“茶禅一味”以茶助禅，以茶礼佛，在从茶中体味枯寂的同时，也在茶中注入佛理禅机......</p>
              </div>
            </div>
          </div>
          <div class="content">
            <img src="@/assets/img/study/2.png" alt="">
            <div class="text">
              <div class="text_top">
                <h4>开化龙顶</h4>
                <span @click="showClick=true">{{message}}</span>
              </div>
              <div class="text_content">
                <p>“干茶色绿，汤水青绿，叶底鲜绿”，开化龙顶芽茶，颗颗紧直挺秀，玉绿光洁，香气幽雅，可品可赏。</p>
              </div>
            </div>
          </div>
          <div class="content">
            <img src="@/assets/img/study/3.png" alt="">
            <div class="text">
              <div class="text_top">
                <h4>大佛龙井</h4>
                <span @click="showClick=true">{{message}}</span>
              </div>
              <div class="text_content">
                <p>佛教强调“茶禅一味”以茶助禅，以茶礼佛，在从茶中体味枯寂的同时，也在茶中注入佛理禅机......</p>
              </div>
            </div>
          </div>
          <div class="content">
            <img src="@/assets/img/study/4.png" alt="">
            <div class="text">
              <div class="text_top">
                <h4>大佛龙井</h4>
                <span @click="showClick=true">{{message}}</span>
              </div>
              <div class="text_content">
                <p>佛教强调“茶禅一味”以茶助禅，以茶礼佛，在从茶中体味枯寂的同时，也在茶中注入佛理禅机......</p>
              </div>
            </div>
          </div>
          <div class="content">
            <img src="@/assets/img/study/5.png" alt="">
            <div class="text">
              <div class="text_top">
                <h4>大佛龙井</h4>
                <span @click="showClick=true">{{message}}</span>
              </div>
              <div class="text_content">
                <p>佛教强调“茶禅一味”以茶助禅，以茶礼佛，在从茶中体味枯寂的同时，也在茶中注入佛理禅机......</p>
              </div>
            </div>
          </div>
          <div class="content">
            <img src="@/assets/img/study/6.png" alt="">
            <div class="text">
              <div class="text_top">
                <h4>大佛龙井</h4>
                <span @click="showClick=true">{{message}}</span>
              </div>
              <div class="text_content">
                <p>佛教强调“茶禅一味”以茶助禅，以茶礼佛，在从茶中体味枯寂的同时，也在茶中注入佛理禅机......</p>
              </div>
            </div>
          </div>
          <div class="content">
            <img src="@/assets/img/study/7.png" alt="">
            <div class="text">
              <div class="text_top">
                <h4>大佛龙井</h4>
                <span @click="showClick=true">{{message}}</span>
              </div>
              <div class="text_content">
                <p>佛教强调“茶禅一味”以茶助禅，以茶礼佛，在从茶中体味枯寂的同时，也在茶中注入佛理禅机......</p>
              </div>
            </div>
          </div>
          <div class="content">
            <img src="@/assets/img/study/8.png" alt="">
            <div class="text">
              <div class="text_top">
                <h4>大佛龙井</h4>
                <span @click="showClick=true">{{message}}</span>
              </div>
              <div class="text_content">
                <p>佛教强调“茶禅一味”以茶助禅，以茶礼佛，在从茶中体味枯寂的同时，也在茶中注入佛理禅机......</p>
              </div>
            </div>
          </div>
          <div class="content">
            <img src="@/assets/img/study/9.png" alt="">
            <div class="text">
              <div class="text_top">
                <h4>大佛龙井</h4>
                <span @click="showClick=true">{{message}}</span>
              </div>
              <div class="text_content">
                <p>佛教强调“茶禅一味”以茶助禅，以茶礼佛，在从茶中体味枯寂的同时，也在茶中注入佛理禅机......</p>
              </div>
            </div>
          </div>
          <div class="content">
            <img src="@/assets/img/study/10.png" alt="">
            <div class="text">
              <div class="text_top">
                <h4>大佛龙井</h4>
                <span @click="showClick=true">{{message}}</span>
              </div>
              <div class="text_content">
                <p>佛教强调“茶禅一味”以茶助禅，以茶礼佛，在从茶中体味枯寂的同时，也在茶中注入佛理禅机......</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--   弹出泡茶/饮茶指引表格   -->
      <div class="background" v-if="showClick" @click="showClick=false"></div>
      <div :class="[indexBody==0?'makeTea':'']" v-if="showClick">
        <div>
          <img src="@/assets/img/study/point.png" alt="">
        </div>
        <table border="0px" cellspacing="0">
          <colgroup span="8" width="110px" />
          <tr height="40px" align="center">
            <th colspan="2">大佛龙井</th>
          </tr>
          <tr height="40px" >
            <th align="left">
              <img src="@/assets/img/study/step1.png" alt="">
            </th>
            <th align="right"><span>择具 ></span></th>
          </tr>
          <tr height="40px">
            <th align="left">
              <img src="@/assets/img/study/step2.png" alt="">
            </th>
            <th align="right"><span>备水 ></span></th>
          </tr>
          <tr height="40px">
            <th align="left">
              <img src="@/assets/img/study/step3.png" alt="">
            </th>
            <th align="right"><span>烫杯 ></span></th>
          </tr>
          <tr height="40px">
            <th align="left">
              <img src="@/assets/img/study/step4.png" alt="">
            </th>
            <th align="right"><span>置茶 ></span></th>
          </tr>
          <tr height="40px">
            <th align="left">
              <img src="@/assets/img/study/step5.png" alt="">
            </th>
            <th align="right"><span>摇香 ></span></th>
          </tr>
          <tr height="40px">
            <th align="left">
              <img src="@/assets/img/study/step6.png" alt="">
            </th>
            <th align="right"><span>润茶 ></span></th>
          </tr>
          <tr height="40px">
            <th align="left">
              <img src="@/assets/img/study/step7.png" alt="">
            </th>
            <th align="right"><span>冲泡 ></span></th>
          </tr>
        </table>
      </div>
      <div :class="[indexBody==1?'makeTea':'']" v-if="showClick">
        <div>
          <img src="@/assets/img/study/point.png" alt="">
        </div>
        <table border="0px" cellspacing="0">
          <colgroup span="7" width="110px" />
          <tr height="40px" align="center">
            <th colspan="2">大佛龙井</th>
          </tr>
          <tr height="40px" >
            <th align="left">
              <img src="@/assets/img/study/step1.png" alt="">
            </th>
            <th align="right"><span>坐姿 ></span></th>
          </tr>
          <tr height="40px">
            <th align="left">
              <img src="@/assets/img/study/step2.png" alt="">
            </th>
            <th align="right"><span>赏茶 ></span></th>
          </tr>
          <tr height="40px">
            <th align="left">
              <img src="@/assets/img/study/step3.png" alt="">
            </th>
            <th align="right"><span>闻香 ></span></th>
          </tr>
          <tr height="40px">
            <th align="left">
              <img src="@/assets/img/study/step4.png" alt="">
            </th>
            <th align="right"><span>叩茶礼 ></span></th>
          </tr>
          <tr height="40px">
            <th align="left">
              <img src="@/assets/img/study/step5.png" alt="">
            </th>
            <th align="right"><span>端茶 ></span></th>
          </tr>
          <tr height="40px">
            <th align="left">
              <img src="@/assets/img/study/step6.png" alt="">
            </th>
            <th align="right"><span>品茶 ></span></th>
          </tr>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name:"StudyBarItem",
    data(){
      return {
        indexTitle:0,
        indexBody:0,
        showClick: false,
        message: '开始泡茶 >',
      }
    },
    mounted() {
      // console.log(this.indexTitle)
    },
    methods: {
      makeClick() {
        this.indexTitle = 0
        this.indexBody = 0
        this.message = '开始泡茶 >'
      },
      drinkClick() {
        this.indexTitle = 1
        this.indexBody = 1
        this.message = '开始饮茶 >'
      }
    }
  }
</script>

<style scoped>
  .study-bar-item {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
  }
  .study-bar-item .title {
    display: flex;
    align-items: center;
    height: 30px;
  }
  .title div {
    font-size: 20px;
    padding: 0 5px 0 5px;
  }
  .chooseTitle{
    color: #4C9371;
  }

  /*内容样式*/
  .nav {
    width: 100%;
    height: auto;
    margin: auto;
    margin-top: 10px;
  }
  .content {
    width: 100%;
    height: 90px;
    display: flex;
    margin-bottom: 10px;
  }
  .content img {
    width: 90px;
    height: 90px;
  }
  .text {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-left: 5px;
  }
  .text_top {
    display: flex;
    justify-content: space-between;
  }
  .text_top span {
    font-size: 13px;
    margin: auto;
    color: #4C9371;
  }
  .text_content {
    margin-top: 10px;
    font-size: 12px;
  }
  .item {
    width: 90%;
    height: auto;
    margin: auto;
    margin-bottom: 60px;

    position: relative;
    top: 15px;
  }

/* 弹窗内容 */
  .background {
    background-color: rgb(252, 252, 252);
    opacity: 0.3;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1
  }
  .makeTea {
    background-color: rgb(232, 232, 232);
    width: 85%;
    height: 330px;
    display: flex;
    justify-content: space-around;
    border-radius: 25px;

    position: fixed;
    top: 130px;
    left: 10px;
    z-index: 2
  }
  .makeTea div img {
    width: auto;
    height: 260px;

    position: relative;
    top: 50px;
  }
  .makeTea table {
    margin: auto;
  }
  .makeTea table tr th span{
    font-size: 13px;
  }
  .makeTea table tr th img {
    width: auto;
    height: 30px;
  }
</style>