<template>
    <div class="footer-bar">
       <nav>
           <a
             v-for="(item, i) in navItem"
             :key="i"
             :href="item.url"
           >{{ item.name }}</a>
       </nav>
       <div style="margin-bottom:10px;">
           Copyright © 2016 苏州汇川技术有限公司 Design by Inovance 版权所有   苏ICP备12002088号    Powered by xinhongru.com
       </div>
    </div>
</template>
<script>
export default {
    name: 'footer-bar',
    data() {
      return {
        navItem: [
          {  
            name: 'Contact us',
            url: 'contactus'
          },
          {
            name: 'Legal statement',
            url: 'legalstatement'
          },
          {
            name: 'About us',
            url: 'aboutus'
          },
          {
            name: 'Management',
            url: 'management'
          }
        ]
      }
    }
}
</script>
<style lang="less">
.footer-bar {
    background-color: #535353;
    color: #FFFFFF;
    text-align: center;
    min-width: 1000px;
    overflow: hidden;
   > nav {
       display: flex;
       width: 600px;
       margin: 10px auto;
       a {
          flex: 1;
          color: #FFFFFF;
       }
   }
}
</style>


