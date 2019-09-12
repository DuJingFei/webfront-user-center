<template>
   <div class="user-growth card">
      <header>我的成长</header>
      <a class="a-blue" style="float:right" :href="host">查看更多</a>
      <div class="content">
        <article v-for="(item,i) in 3">
           <img src="@/assets/images/Judentus.png" class="title-pic" />
           <p class="cont-title">进阶职场达人必备的 7 种思维方式</p>
           <footer>
              <img src="@/assets/images/icon-viewer.png" />
              <span style="margin-left:5px;">1212</span>
           </footer>
        </article>
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
          font-size: 12px;
          width: 194px;
          height: 178px;
          padding: 0 auto;
          border: 1px solid #DADADA;
          padding: 11px 13px;
          padding-bottom: 2px;
          .title-pic {
             width: 100%;
             height: 112.34px;
             line-height: 17px;
          }
          .cont-title {
             margin: 6px 0 17px 0;
          }
          footer {
             color: #999999;
             font-size: 10px;
             display: flex;
             align-items: center;
          }
      }
   }
}
</style>