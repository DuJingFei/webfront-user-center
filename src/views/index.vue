<template>
    <div class="index-default">
        <carousel/>
        <product-center/>
        <recommend-products/>
        <about-news/>
        <concept-map/>
        <main-product/>
    </div>
</template>
<script>
import Carousel from '@/components/index/Carousel'
import RecommendProducts from '@/components/index/RecommendProducts'
import ProductCenter from '@/components/index/ProductCenter'
import AboutNews from '@/components/index/News'
import MainProduct from '@/components/index/MainProduct'
import ConceptMap from '@/components/index/ConceptMap'
export default {
   name:'index-default',
   components: {
      Carousel,
      AboutNews,
      RecommendProducts,
      ProductCenter,
      MainProduct,
      ConceptMap
   }
}
</script>
<style lang="less">
.index-default {
   background: #E2E7EF;
   margin: 0 auto;
}
</style>