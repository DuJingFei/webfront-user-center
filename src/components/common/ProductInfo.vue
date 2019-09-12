<template>
    <div class="product-info card">
       <header>我的产品</header>
       <p class="product-count">
          <span class="formal">正式产品: <i>2</i>个</span>
          <span class="trial">试用产品: <i>2</i>个</span>
       </p>
       <div class="main-table">
          <product-table :tableData='tableData' />
          <div>
            <p>欢迎试用金蝶产品</p>
            <article>
                
            </article>
          </div>
       </div>
    </div>
</template>
<script>
import ProductTable from './ProductTable';
export default {
   name: 'product-info',
   components: {
      ProductTable
   },
   data() {
       return {
           tableData: [
              {
                  name: '金蝶云星空',
                  number: '1212',
                  status: '0',
                  startDate: 1568164583000,
                  date: 1568164583000,
                  url:'weed'
              },
              {
                  name: '金蝶云星空',
                  number: '1212',
                  status: '2',
                  startDate: 1568164583000,
                  date: 1568164583000,
                  url:'weed'
              },
              {
                  name: '金蝶云星空',
                  number: '1212',
                  status: '2',
                  startDate: 1568164583000,
                  date: 1568164583000,
                  url:'weed'
              },
              {
                  name: '金蝶云星空',
                  number: '1212',
                  status: '1',
                  startDate: 1568164583000,
                  date: 1568164583000,
                  url:'weed'
              },
              {
                  name: '金蝶云星空',
                  number: '1212',
                  status: '1',
                  startDate: 1568164583000,
                  date: 1568164583000,
                  url:'weed'
              }
           ]
       }
   }
}
</script>
<style lang="less">
.product-info {
   padding: 18px 24px;
   .product-count {
      margin:20px 0;
      line-height:20px;
      i {
         font-style: normal;
         font-weight: bold;
         margin: 0 3px;
      }
   }
   .trial {
       margin-left: 100px;
   }
}
</style>