<template>
  <div>
    <div id="box">
      <div class="one">你的今日专属推荐({{Time.Years}}-{{Time.Moon}}-{{Time.Day}})</div>
      <div class="two">——根据今日用户拿出，放入数据每小时更新——</div>
      <div class="time_mes">10点后未决定视为主动放弃今日5次机会</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  data() {
    return {
      Time: {
        Years: "2022",
        Moon: "5",
        Day: "2",
      },
    };
  },
  mounted() {
    let myDate = new Date();
    let Y = myDate.getFullYear();
    let M = myDate.getMonth();
    let D = myDate.getDate();
    this.Time.Years = Y;
    this.Time.Moon = M;
    this.Time.Day = D;
  },
};
</script>

<style>
#box {
  width: 100%;
  height: 58px;
  border-bottom: 1px rgb(234, 230, 230) solid;
}
#box .one {
  font-size: 20px;
  color: #05c1da;
  margin-left: 53px;
  margin-top: 3px;
  font-weight: bold;
}
#box .two {
  font-size: 10px;
  margin-left: 49px;
}
#box .time_mes {
  color: red;
  margin-left: 43px;
}
</style>