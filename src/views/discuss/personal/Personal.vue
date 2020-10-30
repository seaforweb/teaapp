<template>
  <div id="personal">
    <div v-for="item in Personal" :key="item.id">
      <div class="top">
        <div class="fir">
          <img :src="item.bac" alt="">
        </div>
        <div class="sec">
          <div>
            <img src="@/assets/img/discuss/heart.png" alt="">
            <span>我的关注</span>
          </div>
          <div>
            <img src="@/assets/img/discuss/notice.png" alt="">
            <span>我的关注</span>
          </div>
        </div>
        <div class="third">
          <img :src="item.head" alt="" @click="headClick">
          <span>{{item.name}}</span>
        </div>
        <div class="back">
          <img src="@/assets/img/discuss/back.png" alt=""  @click="goOff()">
        </div>
      </div>
      <div class="content">
        <div class="title">
          <p>最近关注我的人</p>
        </div>
        <div class="content_nav">
          <div class="follow" v-for="item in follow" :key="item.id">
            <div class="follow_top">
              <img :src="item.head" alt="">
              <div>
                <p>{{item.name}}</p>
                <p class="time">{{item.time}}</p>
              </div>
            </div>
            <div class="follow_bottom">
              <p class="time">{{item.number}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="body">
        <div class="title"><p>我的发帖</p></div>
        <div v-for="item in article" :key="item.id">
          <div class="time">{{item.time}}</div>
          <div class="nav">
            <div class="nav_top">
              <p>{{item.copy}}</p>
            </div>
            <div class="nav_content">
              <img :src="item.photo" alt="">
            </div>
            <div class="nav_bottom">
              <div>
                <img src="@/assets/img/discuss/good.png" alt="">
                <p>{{item.good}}</p>
              </div>
              <div>
                <img src="@/assets/img/discuss/share.png" alt="">
                <p>{{item.share}}</p>
              </div>
              <div>
                <img src="@/assets/img/discuss/comment.png" alt="">
                <p>{{item.comment}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PersonalHead from "./PersonalHead";

  export default {
    name: "Personal",
    components: {
      PersonalHead
    },
    data() {
      return {
        Personal:[
          {id: 0, name:"茶艺大师", head:require("@/assets/img/discuss/self_head.png"),
            bac:require("@/assets/img/discuss/background.png"),
          }
        ],
        article:[
          {id: 0, time:"9-27 19:22", copy:"这茶也太香了吧！",
            photo:require("@/assets/img/discuss/photo1.png"),
            good:"36", share:"3", comment:"7"
          },
          {id: 1, time:"9-27 19:22", copy:"这茶也太香了吧！",
            photo:require("@/assets/img/discuss/photo1.png"),
            good:"36", share:"3", comment:"7"
          },
          {id: 2, time:"9-27 19:22", copy:"这茶也太香了吧！",
            photo:require("@/assets/img/discuss/photo1.png"),
            good:"36", share:"3", comment:"7"
          },
          {id: 3, time:"9-27 19:22", copy:"这茶也太香了吧！",
            photo:require("@/assets/img/discuss/photo1.png"),
            good:"36", share:"3", comment:"7"
          },
        ],
        follow:[
          {id:0, name:"油吐 ber", time:"3个小时前", number:"频道粉丝数: 3万",
            head:require("@/assets/img/discuss/head2.png")
          },
          {id:1, name:"野猪库克", time:"2天前", number:"频道粉丝数: 347",
            head:require("@/assets/img/discuss/head3.png")
          },
          {id:2, name:"油吐 ber", time:"3个小时前", number:"频道粉丝数: 3万",
            head:require("@/assets/img/discuss/head4.png")
          },
          {id:3, name:"油吐 ber", time:"3个小时前", number:"频道粉丝数: 3万",
            head:require("@/assets/img/discuss/head1.png")
          },
        ]
      }
    },
    methods: {
      headClick() {
        this.$router.push('/personalHead')
      },
      goOff() {
        if (window.history.length <= 1) {
          this.$router.push({path: '/'})
          return false
        } else {
          this.$router.go(-1)
        }
      },
    }
  }
</script>

<style scoped>
  #personal {
    width: 100%;
    height: 100vh;
    background-color: rgb(250, 250, 250);
  }
  .back {
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 10;
  }
  .back img {
    width: auto;
    height: 25px;
  }

  .top {
    width: 100%;
    height: 50%;
    background-color: rgb(250, 250, 250);

    position: fixed;
    z-index: 10;
  }
  .fir {
    width: 100%;
    height: auto;
  }
  .fir img {
    width: 100%;
    height: auto;
  }
  .sec {
    width: 90%;
    height: auto;
    margin: auto;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
  }
  .sec div {
    width: 90px;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 13px;
  }
  .sec img {
    width: 30px;
    height: auto;
    margin-bottom: 3px;
  }
  .third {
    width: 110px;
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    color: black;

    position: fixed;
    top: 160px;
    left: 110px;
    z-index: 5;
  }
  .third img {
    width: 90px;
    height: auto;
    margin-bottom: 15px;
  }

  .content {
    width: auto;
    height: 143px;
    margin: auto;
    padding-top: 10px;

    position: relative;
    top: 285px;
    z-index: 5;
  }
  .content_nav{
    width: 100%;
    height: auto;
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .follow {
    width: 120px;
    height: 80px;
    min-width: 120px;
    margin-left: 20px;
    border-radius: 20px;
    background-color: rgb(118, 118, 118);
  }
  .follow_top {
    display: flex;
    color: white;
  }
  .follow_top div {
    display: flex;
    flex-direction: column;
  }
  .follow_top img {
    width: auto;
    height: 50px;

    position: relative;
    right: 10px;
  }
  .follow_bottom {
    color: white;
    position: relative;
    bottom: 20px;
  }

  .body {
    width: 100%;
    height: auto;

    position: relative;
    top: 285px;
  }
  .title {
    width: 90%;
    margin: auto;
    color: black;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .time {
    font-size: 12px;
    text-align: center;
    margin-bottom: 10px;
    margin-top: 20px;
  }
  .nav {
    width: 90%;
    height: auto;
    background-color: rgb(244, 244, 244);
    margin: auto;
    border-radius: 20px;
  }
  .nav_top {
    width: auto;
    height: 20px;
    padding: 10px;
  }
  .nav_content img {
    width: 120px;
    height: auto;
    margin: 15px 0 5px 10px;
  }
  .nav_bottom {
    display: flex;
  }
  .nav_bottom div {
    display: flex;
    padding: 10px;
  }
  .nav_bottom img {
    width: 20px;
    height: auto;
  }
</style>