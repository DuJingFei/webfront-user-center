<template>
    <div class="index-default">
       <div class="main">
          <section class="area-left">
             <user-basic/>
             <product-info/>
             <user-growth/>
           </section>
           <aside class="area-right">
             3434
          </aside>
       </div>
    </div>
</template>
<script>
import UserBasic from '@/components/common/UserBasic';
import ProductInfo from '@/components/common/ProductInfo';
import UserGrowth from '@/components/common/UserGrowth';
export default {
   name:'index-default',
   components: {
       UserBasic,
       ProductInfo,
       UserGrowth
   }
}
</script>
<style lang="less">
.index-default {
   background: #E2E7EF;
   .main {
      width: 1156px;
      margin: 20px auto;
      .area-left {
        width: 726px;
        display: inline-block;
        margin-right: 14px;
      }
      .area-right {
          width: 416px;
          display: inline-block;
      }
   }
}
</style>