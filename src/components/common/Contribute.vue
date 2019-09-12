<template>
    <div class="card-contribute card">
      <header>我的贡献</header>
      <a :href='host' target="_blank" class="a-blue" style="float:right">进入社区</a>
      <p>等级</p>
      <p>获得0次赞同</p>
      <p>获得0次收藏</p>
      <p>已帮助0人</p>
    </div>
</template>
<script>
export default {
    name: 'card-contribute',
}
</script>
<style lang="less">
.card-contribute {
   padding: 20px 24px;
   > header {
      margin-bottom: 14px;
   } 
   > p {
       font-size: 14px;
       font-weight: bold;
       height: 44px;
       line-height: 44px;
   }
}
</style>