<template>
  <div>
    <div id="main_box">

      <!-- 左侧 -->
      <!-- 图片 -->
      <div class="main_img">
        <div class="main_img1">
          <!-- 图片 -->
          <img src="../../images/main_1.jpg" alt="资源丢失" />
          <!-- <img :src='img_address_1' alt="资源丢失" /> -->
        </div>
        <div class="main_img2">
          <!-- 成语 -->
          {{Text_1.a}}
        </div>
      </div>

      <!-- 右侧 -->
      <!-- 文字 -->
      <div class="Right_body">
        <div class="Right_body_title">
          <!-- 标题 -->
          今日60人已参与，仅剩3人
        </div>
        <div>
          <!-- 进度条 -->
          <el-progress :text-inside="true" :stroke-width="15" :percentage="92"></el-progress>
        </div>
        <div class="Right_body_text1">
          <!-- 一句文本，有可能是后端发来的 -->
          {{Text_1.b}}
        </div>
        <!-- 立即拿出来一条 -->
        <button @click="add">立即决定拿出1条</button>
        <!-- <slot>我是默认内容</slot> -->
        <div class="Right_body_text2">
          <!-- 一句文本2，自定义 -->
          <i class="el-icon-thumb"></i>
          <span>{{Text_1.c}}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "MainBody",
  props:['Text_1','Text_2','Text_3'],
  data() {
    return {
      
    };
  },
  methods:{
    add(){
      alert(1)
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#main_box {
  border-radius: 5px;
  margin: 5px;
  width: 99.5%;
  height: 132px;
  /* border: 1px rgb(225, 7, 7) solid; */
  /* background-color: #bfa; */
  display: flex;
}

/* 左侧样式 */
#main_box .main_img {
  width: 119px;
  height: 125px;
  background-color: #a4ebf1;
  margin: 3px;
  font-size: 7px;
  text-align: center;
  border-radius: 5px;
  padding-bottom: 2px;
}
#main_box .main_img img{
  width: 100%;
}
#main_box .main_img .main_img1 {
  border-radius: 5px;
  margin: 3px 7px;
  width: 105px;
  height: 105px;
  background-color: #bfa;
  overflow: hidden;
}


/* 右侧主体的样式 */
#main_box .Right_body{
  width: 90%;
  height: 125px;
  /* border: 1px black solid; */
  /* background-color: rgb(120, 120, 221); */
  margin: 3px;
  text-align: center;
}
#main_box .Right_body .Right_body_title{
  margin: 0 2px;
}
/* 进度条 */
.el-progress-bar__inner{
  background-color: #56DADE;
}
/* .el-progress-bar{
  width: 50%;
} */

#main_box .Right_body .Right_body_text1{
  margin-top: 3px;
  margin-bottom: 3px;
  /* margin-left: 15px; */
  width: 100%;
  height: 30px;
  background-color: #EEF6F8;
  color: #4cbbbf;
  font-size: 10px;
  text-align: center;
  line-height: 30px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

/* 按钮 */
#main_box .Right_body button{
  width: 180px;
  height: 30px;
  border: none;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  /* background-color: #141011; */
  background: linear-gradient(#141011, #8A8889);
  color: #56DADE;
}


/* 文本2 */
#main_box .Right_body .Right_body_text2 span{
  margin-top: 3px;
  font-size: 12px;
  font-weight: 100;
}
</style>