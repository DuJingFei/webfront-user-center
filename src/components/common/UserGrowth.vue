<template>
   <div class="user-growth card">
      <header>我的成长</header>
      <div class="content">
        <article>1</article>
        <article>2</article>
        <article>3</article>
      </div>
   </div>
</template>
<script>
export default {
   name: 'user-growth',
}
</script>
<style lang="less">
.user-growth {
   padding: 18px 24px;
   > header {
      margin-bottom: 14px;
   }
   .content {
      display: flex;
      justify-content: space-between;
      > article {
          width: 217px;
          height: 178px;
          border: 1px solid #DADADA;
      }
   }
}
</style>