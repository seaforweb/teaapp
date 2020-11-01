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
        <div class="nav" v-for="(item,index) in text" :key="item.id">
          <div class="content">
            <img :src="item.photo" alt="">
            <div class="text">
              <div class="text_top">
                <h4>{{item.name}}</h4>
                <span @click="btnClick(index)">{{message}}</span>
              </div>
              <div class="text_content">
                <p>{{item.intro}}</p>
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
              <th colspan="2">{{moreText.name}}</th>
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
              <th colspan="2">{{moreText.name}}</th>
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
        message:"开始泡茶 >",
        text:[
          {id: 0, num: 0, name:"大佛龙井", photo:require("@/assets/img/study/1.png"),
            intro:"佛教强调“茶禅一味”以茶助禅，以茶礼佛，在从茶中体味枯寂的同时，也在茶中注入佛理禅机......"
          },
          {id: 1, num: 1, name:"开化龙顶", photo:require("@/assets/img/study/2.png"),
            intro:"“干茶色绿，汤水青绿，叶底鲜绿”，开化龙顶芽茶，颗颗紧直挺秀，玉绿光洁，香气幽雅，可品可赏。"
          },
          {id: 2, num: 2, name:"安吉白茶", photo:require("@/assets/img/study/3.png"),
            intro:"成茶外形细紧，形如凤羽，色如玉霜，光亮油润，清高馥郁，滋味清爽甘醇。"
          },
          {id: 3, num: 3, name:"径山茶", photo:require("@/assets/img/study/4.png"),
            intro:"径山茶自唐宋以来历以“崇尚自然，追求绿翠，讲究真色、真香、真味”著称。"
          },
          {id: 4, num: 4, name:"武阳春雨", photo:require("@/assets/img/study/5.png"),
            intro:"“一夕轻雷落万丝”，武阳春雨茶产于武义县，境内峰峦叠嶂，山清水秀。"
          },
          {id: 5, num: 5, name:"西湖龙井", photo:require("@/assets/img/study/6.png"),
            intro:"“欲把西湖比西子，从来佳茗似佳人”，千百年来，多少文人墨客，才子佳人为之吟咏。"
          },
          {id: 6, num: 6, name:"金奖惠明茶", photo:require("@/assets/img/study/7.png"),
            intro:"。“惠明茶，南泉水”所泡之茶，“一杯淡，二杯鲜，三杯甘醇，四杯韵犹存”，味浓持久，回味鲜醇香甜。"
          },
          {id: 7, num: 7, name:"松阳银猴", photo:require("@/assets/img/study/8.png"),
            intro:"银猴山兰，银猴龙剑，银猴白茶，银猴香茶等名茶系列品质优异，饮之心旷神怡，回味无穷，被誉为“茶中瑰宝”。"
          },
          {id: 8, num: 8, name:"望海茶", photo:require("@/assets/img/study/9.png"),
            intro:"望海茶外形细嫩挺秀，翠绿显亮，香气清香持久，汤色清澈明亮，滋味鲜爽回甘，叶底芽叶成朵，嫩绿明亮。"
          },
          {id: 9, num: 9, name:"绿剑茶", photo:require("@/assets/img/study/10.png"),
            intro:"成品茶形如绿色宝剑，尖挺有力，色泽嫩绿，汤色清澈明亮，冲泡时芽头耸立，犹如绿剑群聚，栩栩如生。"
          },
        ],
        moreText:null
      }
    },
    mounted() {
      // console.log(this.indexTitle)
    },
    methods: {
      makeClick() {
        this.indexTitle = 0
        this.indexBody = 0
        this.message = "开始泡茶 >"
      },
      drinkClick() {
        this.indexTitle = 1
        this.indexBody = 1
        this.message = "开始饮茶 >"
      },
      btnClick(index){
        // console.log(index)
        this.moreText=this.text[index]
        this.showClick=true
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