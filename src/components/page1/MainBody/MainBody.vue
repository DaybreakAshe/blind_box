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
          微操匠人，神级走位
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
          “跟进取者在一起，行动不会落后”
        </div>
        <!-- 立即拿出来一条 -->
        <button>立即拿出来一条</button>
        <div class="Right_body_text2">
          <!-- 一句文本2，自定义 -->
          <i class="el-icon-thumb"></i>
          <span>现在还没起床的首选</span>
        </div>
      </div>
    </div>
    <!-- <div>{{img_address_1}}</div> -->
  </div>
</template>

<script>
export default {
  name: "MainBody",
  // props:['img_address_1'],
  data() {
    return {
      
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#main_box {
  border-radius: 5px;
  margin: 5px;
  width: 96.5%;
  height: 132px;
  /* border: 1px rgb(225, 7, 7) solid; */
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
  width: 230px;
  height: 125px;
  /* border: 1px black solid; */
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
.el-progress-bar{
  width: 80%;
}

#main_box .Right_body .Right_body_text1{
  margin-top: 3px;
  margin-bottom: 3px;
  margin-left: 15px;
  width: 200px;
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