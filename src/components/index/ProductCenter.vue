<template>
   <div class="product-center">
       <h4 class="index-title">
         <span>PRODUCTS CENTER</span>
       </h4>

       <el-row class="main-center">
         <el-col 
           v-for="(item,i) in product_centers" 
           :key="i"
           :span="8"
         >
           <div 
             ref="productItem"
             class="product-center-item"
             :style="{'background-image': `url(${item.url})`, 'height':`${itemHeight}px` }"
           >
             <div class="modal-item">
                
             </div>
              <!-- <img 
                :src="item.url" 
                :alt="item.name" 
              /> -->
           </div>
         </el-col>
      </el-row>

      <!--
       <div class="main-center">
          <dir class="product-center-item" v-for="(item,i) in product_centers" :key="i">
             <img :src="item.url" :alt="item.name" />
             <div class="product-modal">
                <h3>Tests</h3>
             </div>
          </dir>
       </div>
       -->
   </div>
</template>
<script>
export default {
   name: 'product-center',
   data() {
      return {
        product_centers: [
            {
               url: require('../../assets/images/center3.png'),
               name: '一站式服务',
               desc: '极致的体验，尽情期待'
            },
            {
               url: require('../../assets/images/center2.png'),
               name: '一站式服务',
               desc: '极致的体验，尽情期待'
            },
            {
               url: require('../../assets/images/center1.png'),
               name: '一站式服务',
               desc: '极致的体验，尽情期待'
            }
        ],
        itemHeight: '',
      }
   },
   mounted() {
     let _this = this;
     this.$nextTick(() => {
       this.itemHeight = this.$refs.productItem[0].offsetWidth / 1.335
     })

     window.onresize = () => {
        this.$nextTick(() => {
          this.itemHeight = this.$refs.productItem[0].offsetWidth / 1.335
        })
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
      min-width: 1200px;
     
      .product-center-item {
         overflow: hidden;  
         background-size: 100%;
         background-position: 50%;
         transition: all 0.5s linear;
         &:hover {
           background-size: 105% !important;
           transition: all 0.5s linear;
         }
         .modal-item {
            width: 100%;
            height: 100%;
            background-color: black;
            opacity: 0;
            &:hover {
               opacity: .3;
            }
         }



         > img {
             width: 100%;
             height: 100%;
            
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


