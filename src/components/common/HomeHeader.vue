<template>
  <header class="home-header">
    <div class="main">
      <img class="logo-image" src="@/assets/images/logo.jpg" alt="hya-alt" title="hya">
      <nav>
        <li>解决方案</li>
        <li>产品</li>
        <li>公司简介</li>
        <li>服务与认证</li>
        <li>联系方式</li>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  name: "home-header",
  data() {
    return {
    };
  },
  methods: {
    view(itemId) {
      debugger;
    }
  }
};
</script>
<style lang="less">
.home-header {
  display: flex;
  height: 80px;
  line-height: 80px;
  text-align: center;
  box-shadow: 0 1px 3px rgba(32, 26, 26, 0.1);
  background: #fff;
  .main {
    display: flex;
    width: 1200px;
    margin: 0 auto;
  }
  .logo-image {
      width: 80px;
    }
  nav {
    overflow: hidden;
    margin-left: 100px;
    > li {
      float: left;
      list-style-type: none;
      min-width: 100px;
      text-align: center;
      cursor: pointer;
    }
    .el-dropdown {
      float: left;
      span {
        cursor: pointer;
      }
    }
  }
}
</style>


