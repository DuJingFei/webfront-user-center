<template>
  <div class="product-detail">
    <div class="main-content">
      <section class="product-avatar">
        <img :src='productDetail.image' :alt='productDetail.name' />
      </section>
      <section class="product-basic">
        <h2 class="product-name">{{ productDetail.name }}</h2>
        <div class="product-content">
           {{ productDetail.content }}
        </div>
      </section>
    </div>
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
        <el-tab-pane label="specification" name="specification">
          <div class="product-specification" v-html='productDetail.specification'></div>
        </el-tab-pane>
        <el-tab-pane label="Benefits & Features" name="second">
          <div class="product-specification" v-html='productDetail.benefit'></div>
        </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'product-detail',
  data() {
    return {
      activeName: 'specification',
      productDetail: '',
    }
  },
  computed: {
    productId() {
      return this.$route.params.id
    }
  },
  created() {
    if (this.productId !== null) {
      this.getProductDetail(this.productId);
    }
  },
  methods: {
    getProductDetail(pId) {
      if (pId === null) return;
      this.$fetch.get(this.$api.PRODUCT_DETAIL, { id: pId }).then(res => {
        if (res.errorCode === 0) {
          this.productDetail = res.data;
        }
      })
    },
    handleClick(tab, event) {
        console.log(tab, event);
    }
  }
}
</script>
<style lang="less">
.product-detail {
  background-color: #FFFFFF;
  width: 1200px;
  margin: 0 auto;
  .main-content {
    display: flex;
    position: relative;
    padding: 30px;
   // border: 1px solid black;
    .product-avatar {
      display: inline-block;
      width: 300px;
      height: 300px;
      margin-right: 30px;
      border: 1px solid #e0e0e0;
      > img {
        width: 300px;
        height: 300px;
      }
    }
    .product-basic {
      width: 900px;
      .product-name {
        font-size: 24px;
        margin-top: 0;
        font-weight: 700;
        margin-bottom: 10px;
      }
    }
  }
  .product-specification {
     margin: 0 30px;
     img {
       width: 100%;
     }
   }
}
</style>