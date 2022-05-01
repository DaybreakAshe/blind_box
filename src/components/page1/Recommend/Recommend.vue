<template>
  <div>
    <div id="box">
      <div class="one">
        你的今日专属推荐({{ Time.Years }}-{{ Time.Moon }}-{{ Time.Day }})
      </div>
      <div class="two">——根据今日用户拿出，放入数据每小时更新——</div>
      <div class="time_mes">
        {{ Time.Hour }}:{{ Time.Minute }}:{{
          Time.Second
        }}点后未决定视为主动放弃今日5次机会
      </div>
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
        Hour: "",
        Minute: "",
        Second: "",
      },
    };
  },
  mounted() {
    let myDate = new Date();
    let Y = myDate.getFullYear(); //年
    let M = myDate.getMonth(); //月
    let D = myDate.getDate(); //日
    let H = myDate.getHours(); //时
    let MIN = myDate.getMinutes(); //分
    let S = myDate.getSeconds(); //秒
    this.Time.Years = Y;
    this.Time.Moon = M;
    this.Time.Day = D;
    this.Time.Hour = H;
    this.Time.Minute = MIN;
    this.Time.Second = S;
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
  margin-left: 21px;
}
</style>