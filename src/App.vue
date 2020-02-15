<template>
  <div id="app">
    <home-header />
    <router-view class="main-com"/>
    <!-- <footer-bar /> -->
  </div>
</template>

<script>
import HomeHeader from './components/common/HomeHeader'
import FooterBar from './components/common/FooterBar'
export default {
  name: 'app',
  components: {
    HomeHeader,
    FooterBar
  },
}
</script>
<style lang="less">
#app {
  color: #2c3e50;
  height: calc(100vh);
  font-size: 14px;
  word-break: break-word;
  .main-com {
    min-height: calc(90%)
  }
}
</style>
