<template>
    <div class="footer-bar">
       <nav>
           <li>联系我们</li>
           <li>法律声明</li>
           <li>网站地图</li>
           <li>留言板</li>
           <li>产品列表</li>
       </nav>
       <div style="margin-bottom:10px;">
           Copyright © 2016 苏州汇川技术有限公司 Design by Inovance 版权所有   苏ICP备12002088号    Powered by xinhongru.com
       </div>
    </div>
</template>
<script>
export default {
    name: 'footer-bar'
}
</script>
<style lang="less">
.footer-bar {
    background-color: #535353;
    margin-top: 100px;
    color: #FFFFFF;
    text-align: center;
    min-width: 1000px;
    overflow: hidden;
   > nav {
       display: flex;
       width: 600px;
       margin: 10px auto;
       li {
          flex: 1;
          list-style-type: none;
       }
   }
}
</style>


