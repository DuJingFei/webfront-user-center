<template>
    <div class="home-header card">
      <section class="logo">
         <img src="@/assets/images/temp-logo.png" alt="金蝶用户中心"/>
      </section>

      <section class="menu">
          <router-link 
            class="menu-item"
            v-for="(item,i) in menuList" 
            :key="i"
            :to="item.href"
            >{{item.name}}</router-link>
      </section>

      <section class="avatar-info">
          <el-dropdown class="user-avatar" :hide-on-click="false">
              <el-badge>
                  <img class="avatar-img" src="@/assets/images/Judentus.png" alt="avatar"/>
              </el-badge>
              <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                       <a class="menu-list" href="/" target="_blank">我的主页</a>
                    </el-dropdown-item>
                    <el-dropdown-item>
                       <a class="menu-list" href="/" target="_blank" >更换密码</a>
                    </el-dropdown-item>
                </el-dropdown-menu>
          </el-dropdown>
      </section>
    </div>
</template>
<script>
export default {
   name: 'home-header',
   data() {
       return {
           menuList: [
               {
                   name:'首页',
                   href: '/'
               }
           ]
       }
   }
}
</script>
<style lang="less">
.home-header {
   height: 52px;
   display: flex;
   align-items: center;
   .logo {
       margin-right: 42px;
   }
   .menu-item {
      display: inline-block;
      background: #5A79EE;
      height: 52px;
      line-height: 52px;
      color: #FFFFFF;
      padding: 1px 31px;
   }

   .avatar-info {
       margin-left: auto;
       margin-right: 50px;
       .user-avatar {
           height: 38px;
       }
       .avatar-img {
           width: 38px;
           height: 38px;
           border-radius: 38px;
           cursor: pointer;
       }
   }
}
</style>