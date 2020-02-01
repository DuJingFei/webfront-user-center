<template>
   <div class="recommend-products">
       <h4 class="index-title">
         <span>RECOMMEND PRODUCTS</span>
       </h4>
       <div class="great-examples">
    
       <el-row :gutter="20" class="main-center">
          <el-col
            class="example-item"
            v-for="(item,i) in examples" 
            :key="i"
            :span="6"
          >
            <div class="item-content">
              <header :style="{'backgroundImage': `url(${item.img}`}"></header>
              <div class="product-content">
                <a class="product-name">{{item.name}}</a>
                <ul class="product-descs">
                <li class="desc-item" v-for="(desc,d) in item.desc" :key="d">{{desc}}</li>
                </ul>
              </div>
            </div>
          </el-col>
       </el-row>
    </div>
   </div>
</template>
<script>
export default {
   name: 'recommend-products',
   data() {
       return {
           examples: [
                {
                    id: 1212,
                    img: require('../../assets/images/recommend-product.jpg'),
                    name: '伺服电机',
                    desc: [
                        '灵巧紧凑，安装方式多样',
                        '书本化设计，节省安装空间',
                        '藏线设计，走线更加方便',
                        '组网设计、性能强大'
                    ]
                },
                {
                    id: 1212,
                    img: require('../../assets/images/recommend-product.jpg'),
                    name: '伺服电机',
                    desc: [
                        '灵巧紧凑，安装方式多样',
                        '书本化设计，节省安装空间',
                        '藏线设计，走线更加方便',
                        '组网设计、性能强大'
                    ]
                },
                {
                    id: 1212,
                    img: require('../../assets/images/recommend-product.jpg'),
                    name: '伺服电机',
                    desc: [
                        '灵巧紧凑，安装方式多样',
                        '书本化设计，节省安装空间',
                        '藏线设计，走线更加方便',
                        '组网设计、性能强大'
                    ]
                },
                {
                    id: 1212,
                    img: require('../../assets/images/recommend-product.jpg'),
                    name: '伺服电机',
                    desc: [
                        '灵巧紧凑，安装方式多样',
                        '书本化设计，节省安装空间',
                        '藏线设计，走线更加方便',
                        '组网设计、性能强大'
                    ]
                }
            ]
       }
   }
}
</script>
<style lang="less">
.recommend-products {
    margin-top: 60px;
}
.great-examples {
    max-width: 1200px;
    margin: 23px auto;
   .example-item {
       min-width: 200px;
      .item-content {
        background-color: #FFF;
        margin-bottom: 10px;
      > header {
          height: 250px;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          border-bottom: 2px solid #f8f8f8;
      }
      .product-content {
         padding: 25px 18px 15px;
         font-size: 15px;
         color: #666;
      }
      .product-name {
         display: inline-block;
         font-size: 18px;
         color: #333;
         margin-bottom: 16px;
         height: 24px;
         line-height: 24px;
         white-space: nowrap;
         -o-text-overflow: ellipsis;
         text-overflow: ellipsis;
         overflow: hidden;
      }
        .product-descs {
            padding-left: 15px;
        }
        .desc-item {
            position: relative;
            padding-left: 4px;
            margin-bottom: 6px;
        }
      }
      
   }
}
</style>


