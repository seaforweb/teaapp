<template>
  <div id="intro">
    <div v-for="item in content" :key="item.id">
      <div class="top">
        <div class="title">
          <img src="@/assets/img/more/introback.png" alt="" @click="goOff()">
          <img src="@/assets/img/more/map.png" alt="">
        </div>
        <img :src="item.idImg" alt="" class="image">
        <p>{{item.name}}</p>
        <span class="class">{{item.class}}</span>
        <div class="choose">
          <div :class="[indexTitle==0?'chooseTitle':'']" @click="introClick">简介</div>
          <div :class="[indexTitle==1?'chooseTitle':'']" @click="identClick">鉴别</div>
          <div :class="[indexTitle==2?'chooseTitle':'']" @click="efficacyClick">功效</div>
        </div>
      </div>
      <div class="bottom">
        <div class="nav" v-if="indexTitle==0">{{item.intro}}</div>
        <div class="nav" v-if="indexTitle==1">{{item.ident}}</div>
        <div class="nav" v-if="indexTitle==2">{{item.efficacy}}</div>
        <div class="communicate">
          <img src="@/assets/img/more/comment.png" alt="" @click="commentClick">
          <img src="@/assets/img/more/share.png" alt="" @click="shareClick">
          <img src="@/assets/img/more/good.png" alt="" @click="goodClick">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Intro",
    data () {
      return {
        indexTitle:0,
        message:"",
        content: [
          {id:0, idImg: require("@/assets/img/more/more2.png"),
            name:" 西湖龙井",
            class:"绿茶",
            intro:"西湖龙井是中国十大名茶之一，属绿茶，其产于浙江省杭州市西湖龙井村周围群山，并因此得名，" +
                "具有1200多年历史。清乾隆游览杭州西湖时，盛赞西湖龙井茶，把狮峰山下胡公庙前的十八棵茶树封为“御茶”。" +
                "西湖龙井按外形和内质的优次分作1～8级。",
            ident:"一摸：判别茶叶的干燥程度。随意挑选一片干茶，放在拇指与食指之间用力捻即成粉末，则干燥度足够；" +
                "若为小碎粒，则干燥度不足，或者茶叶已吸潮。干燥度不足的茶叶，" +
                "比较难储存，同时香气也不高。" +
                "二看：看干茶是否符合龙井茶的基本特征，包括外形、色泽、匀净度等。" +
                "三嗅：嗅闻干茶香气的高低和香型，并辨别有否烟、焦、酸、馊、霉等劣变气味和各种夹杂的不良气味。" +
                "四尝：当干茶的含水量、外形、色泽、香气均符合要求后，进行开汤审评。取3至4克龙井茶置于杯碗中，" +
                "冲入沸水150至200毫升，5分钟后先嗅香气，再看汤色，细尝滋味，后评叶底。" +
                "这个环节更为重要。",
            efficacy:"(1）消臭、助消化功效:口臭时食物残渣在酶的作用下形成甲基硫醇化合物产生臭味。" +
                "西湖龙井茶汤可抑制这种酶的活性,起到消除口臭的作用," +
                "更能刺激分泌更多的消化液,有助于淀粉、蛋白质和脂肪的分解," +
                "帮助消化。"+
                "(2)减肥养颜:龙井茶中的咖啡碱、肌醇泛酸和芳香类物质等多种化合物," +
                "能调节脂肪代谢。茶多酚和维生素C能降低胆固醇和血脂,所以饮龙井茶可减肥," +
                "不过冷饮会适得其反。"
          }
        ]
      }
    },
    methods: {
      goOff() {
        if (window.history.length <= 1) {
          this.$router.push({path: '/'})
          return false
        } else {
          this.$router.go(-1)
        }
      },

      commentClick() {

      },
      shareClick() {

      },
      goodClick() {

      },

      introClick() {
        this.indexTitle = 0
      },
      identClick() {
        this.indexTitle = 1
      },
      efficacyClick() {
        this.indexTitle = 2
      }
    }
  }
</script>

<style scoped>
  #intro {
    width: 100%;
    height: 100vh;
  }
  .top {
    width: 100%;
    height: auto;
    padding-bottom: 15px;
    background-color: rgb(250, 250, 250);
    position: fixed;
    z-index: 10;
  }
  .title {
    width: 95%;
    height: 45px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    z-index: 10;
  }
  .title img {
    width: auto;
    height: 25px;
  }
  .top p {
    font-size: 30px;
    color: white;
    position: fixed;

    top: 200px;
    left: 20px;
    z-index: 10;
  }
  .image {
    width: 100%;
    height: 250px;

    position: relative;
    z-index: 5;
  }
  .class {
    padding: 3px 10px;
    border-radius: 10px;
    background-color: rgb(246, 246, 246);
    position: relative;
    z-index: 10;
  }
  .choose {
    width: 85%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    font-size: 20px;

    position: relative;
    top: 10px;
    z-index: 5;
  }
  .chooseTitle {
    color: #4C9371;
    padding-bottom: 5px;
    border-bottom: 2px solid rgb(76, 147, 113);
    z-index: 10;
  }

  .bottom {
    width: 85%;
    height: auto;
    margin: auto;

    position: relative;
    top: 250px;

  }

  .nav{
    width: 100%;
    height: auto;
    background-color: white;
    font-size: 18px;
    text-align: left;
    padding-top: 75px;
    padding-bottom: 30px;
    position: relative;
    z-index: 1;
  }
  .communicate {
    width: 85%;
    height: 30px;
    background-color: white;

    position: fixed;
    bottom: 0;
    z-index: 10;
  }
  .communicate img{
    width: auto;
    height: 20px;
    margin: 0 10px;
    float: right;
  }
</style>