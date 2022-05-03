<template>
  <div>
    <div>111</div>
    <audio id="audio" :src="require('../../assets/audio/1.mp3')"></audio>
  </div>
</template>

<script>
export default {
  name: "Music",
  mounted() {
    let oAudio = document.querySelector("#audio");
    oAudio.onended = function () {
      //播放完毕，重新循环播放
      oAudio.load();
      oAudio.play();
    };
  },
};
</script>

<style>
</style>