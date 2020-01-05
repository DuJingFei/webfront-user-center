<template>
   <div class="product-center">
       <h4 class="index-title">
         <span>PRODUCTS CENTER</span>
       </h4>
       <div class="main-center">
          <dir class="product-center-item" v-for="(item,i) in product_centers" :key="i">
             <img :src="item.url" :alt="item.name" />
             <div class="product-modal">
                <h3>Tests</h3>
             </div>
          </dir>
       </div>
   </div>
</template>
<script>
export default {
   name: 'product-center',
   data() {
      return {
        product_centers: [
            {
               url: require('../../assets/images/priory.jpg'),
               name: '一站式服务',
               desc: '极致的体验，尽情期待'
            },
            {
               url: require('../../assets/images/center2.jpg'),
               name: '一站式服务',
               desc: '极致的体验，尽情期待'
            }
        ]
      }
   },
   methods: {
      test() {
          alert(1)
      }
   }
}
</script>
<style lang="less">
.product-center {
   margin-top: 60px;
   .main-center {
      width: 1200px;
      display: flex;
      margin: 0 auto;
      .product-center-item {
         position: relative;
         flex: 1;
         padding-left: 0;
         height: 600px;
         height: 400px;
         overflow: hidden;
         > img {
             width: 600px;
             height: 400px;
             transition: transform 1s ease;
            &:hover {
               transform: scale(1.2);
            }
         }
         .product-modal {
            background: rgba(23,132,192,0);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10;
           :hover {
               visibility: visible;
           }
         }
      }
   }
}
</style>


