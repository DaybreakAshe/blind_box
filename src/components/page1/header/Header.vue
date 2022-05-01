<template>
  <div>
    <!-- 页面一的顶部导航栏 -->
    <el-tabs v-model="activeName" @tab-click="handleClick" :stretch='true'>
      <el-tab-pane label="找男生" name="first">
        <Carousel></Carousel>
        <Recommend></Recommend>
      </el-tab-pane>
      <el-tab-pane label="找女生" name="second">找女生</el-tab-pane>
      <el-tab-pane label="放入男生" name="third">放入男生</el-tab-pane>
      <el-tab-pane label="放入女生" name="fourth">放入女生</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Carousel from '../Carousel/Carousel'
import Recommend from '../Recommend/Recommend'
export default {
  name: "Header",
  components:{
    Carousel,
    Recommend
  },
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
    //被选中时触发
    console.log(tab,event)
    },
  },
};
</script>

<style>
.el-tabs__active-bar{
    background-color: black;
}
.el-tabs__item:hover{
  /* 被选中后的样式变化 */
    color: black;
    font-weight:bold
}
.el-tabs__header{
  margin: 0 0 1px;
}
</style>