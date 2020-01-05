<template>
    <el-carousel class="banner-carousel" :interval="5000" height="460px" arrow="always">
    <el-carousel-item v-for="(item,i) in banners" :key="i">
      <!-- <img :src="item.url" /> -->
        <div class="banner-image" :style="{'backgroundImage': `url(${item.url})`}"></div>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
   name: 'carousel',
   data() {
     return {
       banners: [
         {
           url: '/images/b1.jpg',
           name:' star1'
         },
         {
           url: '/images/b2.jpg',
           name:' star2'
         },
         {
           url: '/images/b3.jpg',
           name:' star3'
         },
         {
           url: '/images/b4.jpg',
           name:' star4'
         }
       ]
     }
   }
}
</script>
<style lang="less">
.banner-carousel {
   .banner-image {
      height: 100%;
      background-size: cover;
   }
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

