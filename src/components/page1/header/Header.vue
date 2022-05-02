<template>
  <div>
    <!-- 页面一的顶部导航栏 -->
    <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
      <el-tab-pane label="找男生" name="first">
        <Carousel></Carousel>
        <Recommend></Recommend>
        <MainBody :Text_1="Text_1"></MainBody>
        <div class="End"></div>
      </el-tab-pane>
      <el-tab-pane label="找女生" name="second">
        <Carousel></Carousel>
        <Recommend></Recommend>
        <div class="End"></div>
      </el-tab-pane>
      <el-tab-pane label="放入男生" name="third">
        <Carousel></Carousel>
        <Recommend></Recommend>
        <MainBody :Text_1="Text_1"></MainBody>
        <div class="End"></div>
      </el-tab-pane>
      <el-tab-pane label="放入女生" name="fourth">
        <Carousel></Carousel>
        <Recommend></Recommend>
        <div class="End"></div>
      </el-tab-pane>
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
    MainBody
  },
  data() {
    return {
      activeName: "first",
      Text_1: {
        a: "微操匠人，神级走位",
        b: "“大吉大利，今晚吃鸡”",
        c: "游戏菜鸡的馈赠",
      },
      // Text_2: {
      //   a: "微操匠人，神级走位",
      //   b: "“大吉大利，今晚吃鸡”",
      //   c: "游戏菜鸡的馈赠",
      // },
      // Text_3: {
      //   a: "微操匠人，神级走位",
      //   b: "“大吉大利，今晚吃鸡”",
      //   c: "游戏菜鸡的馈赠",
      // },
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

.End {
  height: 50px;
  /* 为了划到最下面，加了一点空白 */
}
</style>