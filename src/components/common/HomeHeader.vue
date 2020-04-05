<template>
  <header class="home-header">
    <div class="main">
      <a style="display:inline-block;" href="/">
        <img class="logo-image" src="@/assets/images/logo.jpg" alt="hya-alt" title="hya" >
      </a>
      <nav>
        <a 
          v-for="(item , i) in navItems"
          :key="i"
          :href="item.url"
          class='nav-item'
          :class="{'active': item.url === $route.path }"
        >
          {{ item.name }}
        </a>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  name: "home-header",
  data() {
    return {
      navItems: [
        {
          name: 'Home',
          url: '/'
        },
        {
          name: 'Product',
          url: '/productlist'
        },
        {
          name: 'Solution',
          url: '/nothing'
        },
        {
          name: 'Service & Support',
          url: '/service'
        },
        {
          name: 'Contact Us',
          url: '/contactus'
        }
      ]
    };
  },
  methods: {
    view(itemId) {
      
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
  margin-bottom: 2px;
  .main {
    display: flex;
    width: 1200px;
    margin: 0 auto;
  }
  .logo-image {
      width: 80px;
    }
  nav {
    margin-left: 100px;
    min-width: 750px;
    > a {
      display: inline-block;
      list-style-type: none;
      min-width: 120px;
      font-size: 16px;
      font-weight: bold;
      padding: 0 10px;
      &:hover {
        color: #2386ee;
      }
    }
    .active {
      font-weight: bold;
      color: #2386ee;
      border-bottom: 2px solid #2386ee;
    }
  }
}
</style>


