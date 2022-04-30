<template>
  <div>
    <div id="footerBox">
      <div class="Box_tab" @click="oneClick">
        <i :class="oneIcon"></i>
        <span>试玩几下</span>
      </div>
      <div class="Box_tab" @click="twoClick">
        <i :class="twoIcon"></i>
        <span>卖朋友</span>
      </div>
      <div class="Box_tab" @click="threeClick">
        <i :class="threeIcon"></i>
        <span>拉朋友来玩</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Footer',
  data(){
    return {
      oneIcon:'el-icon-message-solid',
      twoIcon:'el-icon-star-off',
      threeIcon:'el-icon-user'
    }
  },
  methods: {
    oneClick(){
      this.oneIcon='el-icon-message-solid'
      this.twoIcon='el-icon-star-off'
      this.threeIcon='el-icon-user'
    },
    twoClick(){
      this.twoIcon='el-icon-star-on'
      this.oneIcon='el-icon-bell'
      this.threeIcon='el-icon-user'
    },
    threeClick(){
      this.threeIcon='el-icon-user-solid'
      this.oneIcon='el-icon-bell'
      this.twoIcon='el-icon-star-off'
    }
  },
};
</script>
<style>
#footerBox {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  display: flex;
  border-top: 0.5px rgb(168, 166, 166) solid;
}

#footerBox .Box_tab {
  width: 33.33%;
  height: 100%;
  /* background-color: rgb(211, 216, 210); */
  /* border: 1px black solid; */
  text-align: center;
  line-height: 50px;
}
</style>