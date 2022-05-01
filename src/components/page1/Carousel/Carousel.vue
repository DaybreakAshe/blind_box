<template>
  <div>
    <div class="block">
      <el-carousel height="150px">
        <el-carousel-item v-for="item in images" :key="item.url">
          <img :src='item.url' alt="图片丢失" class="img_mes">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data(){
    return {
      // 轮播图图片集合
      images:[
        {url:require("@/assets/images/1.jpg")},
        {url:require("@/assets/images/2.jpg")},
        {url:require("@/assets/images/3.jpg")}
      ]
    }
  }
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.img_mes{
  width:100%;
  /* height:100% */
}
</style>