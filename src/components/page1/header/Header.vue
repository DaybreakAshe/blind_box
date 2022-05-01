<template>
  <div>
    <!-- 页面一的顶部导航栏 -->
    <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
      <el-tab-pane label="找男生" name="first">
          <Carousel></Carousel>
          <Recommend></Recommend>
          <!-- <MainBody :img_address_1='img_address_1'></MainBody> -->
          <MainBody></MainBody>
          <MainBody></MainBody>
          <MainBody></MainBody>
          <div class="End"></div>
      </el-tab-pane>
      <el-tab-pane label="找女生" name="second">
        <Carousel></Carousel>
        <Recommend></Recommend>
        <MainBody></MainBody>
        <MainBody></MainBody>
        <MainBody></MainBody>
        <div class="End"></div>
      </el-tab-pane>
      <el-tab-pane label="放入男生" name="third">放入男生</el-tab-pane>
      <el-tab-pane label="放入女生" name="fourth">放入女生</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// 引入组件
import Carousel from "../Carousel/Carousel";
import Recommend from "../Recommend/Recommend";
import MainBody from "../MainBody/MainBody";
export default {
  name: "Header",
  components: {
    Carousel,
    Recommend,
    MainBody,
  },
  data() {
    return {
      activeName: "first",
      // img_address_1:'../../images/main_1.jpg',
      // img_address_2:'../../images/main_2.jpg'
    };
  },
  methods: {
    handleClick(tab, event) {
      //被选中时触发
      console.log(tab, event);
    },
  },
};
</script>

<style>
.el-tabs__active-bar {
  background-color: black;
}
.el-tabs__item:hover {
  /* 被选中后的样式变化 */
  color: black;
  font-weight: bold;
}
.el-tabs__header {
  margin: 0 0 1px;
}

.End{
  height: 50px;
  /* 为了划到最下面，加了一点空白 */
}

</style>