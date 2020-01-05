<template>
  <div id="app">
    <div>
      <home-header/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/common/HomeHeader.vue'
export default {
  name: 'app',
  components: {
    HomeHeader
  },
  mounted() {
  }
}
</script>

<style>
#app {
  color: #2c3e50;
  height: calc(100% – 10px);
  font-size: 14px;
}
</style>
