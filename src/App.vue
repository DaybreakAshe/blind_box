<template>
  <div id="app">
    <Footer></Footer>
    <router-link active-class="active" to="/page1">page1</router-link>
    <router-link active-class="active" to="/page2">page2</router-link>
    <router-link active-class="active" to="/page3">page3</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer'
export default {
  name: 'App',
  components: {
    // 组件注册
    Footer
  }
}
</script>

<style>
</style>
