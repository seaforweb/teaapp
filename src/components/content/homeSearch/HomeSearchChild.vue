<template>
  <div>
    <!--上传照片区域-->
    <div class="bottom_right">
      <div  v-for="(urls, index) in img " style="float: left; margin: 10px ; border: 1px solid red;">
        <div style="text-align: right; position: relative;" v-on:click="deleteImg(index)">X</div>
        <img :src="urls" width="100px" height="100px"  />
      </div>
      <button v-on:click="imgClick()">选择图片</button>
      <input style="float: left;  display: none;" type="file" id='uploadFile'  accept="image/*"  v-on:change="readLocalFile()">
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeSearchChild",
    data() {
      return {
        img:[]
      }
    },
    methods:{
      //删除图片
      deleteImg:function(index){
        this.imgs.splice(index,1);
      },
      //图片click
      imgClick:function(){
        document.getElementById("uploadFile").click();
      },
      //点击选中图片
      readLocalFile: function () {
        var localFile = document.getElementById("uploadFile").files[0];
        var reader = new FileReader();
        var content;
        var current=this;
        reader.onload = function(event) {
          content = event.target.result;
          current.imgs.push(content);  //获取图片base64代码
        }
        reader.onerror = function(event) {
          alert('error')
        }
        content = reader.readAsDataURL(localFile,"UTF-8");
        var sss=document.getElementById("uploadFile").value;
        console.log(sss);
      }
    },
    mounted() {
    },
    created() {


    },
    components: {

    }
  }
</script>

<style scoped>

</style>