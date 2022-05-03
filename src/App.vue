<template>
  <div id="app">
    <Footer></Footer>
    <Music></Music>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer'
import Music from './components/Music/Music'
export default {
  name: 'App',
  components: {
    // 组件注册
    Footer,
    Music
  }
}
</script>

<style>
</style>
