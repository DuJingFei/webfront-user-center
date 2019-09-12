<template>
    <div class="index-default">
       <div class="main">
          <section class="area-left">
             <user-basic/>
             <product-info/>
             <user-growth/>
           </section>
           <aside class="area-right">
             <boss/>
             <contribute/>
             <knowledge/>
          </aside>
       </div>
    </div>
</template>
<script>
import UserBasic from '@/components/common/UserBasic';
import ProductInfo from '@/components/common/ProductInfo';
import UserGrowth from '@/components/common/UserGrowth';
import Boss from '@/components/common/Boss';
import Contribute from '@/components/common/Contribute';
import Knowledge from '@/components/common/Knowledge';
export default {
   name:'index-default',
   components: {
       UserBasic,
       ProductInfo,
       UserGrowth,
       Boss,
       Contribute,
       Knowledge
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
        margin-right: 14px;
        float: left;
      }
      .area-right {
          width: 416px;
          float: left;
      }
   }
}
</style>