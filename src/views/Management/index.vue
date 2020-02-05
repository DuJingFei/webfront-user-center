<template>
  <div class="management-index">
      <h1 class="title">Welcome to HYT Management</h1>
      <article>
        <a 
          v-for='(item,i) in barList' 
          :key='i' target="_blank" 
          :href="item.href">
          {{ item.name }}
        </a>
      </article>
  </div>
</template>
<script>
export default {
   name: 'management-index',
   data() {
      return {
         barList: [
           {
             href: '/management/banners',
             name: 'Banner管理'
           },
           {
             href: '/management/product/index',
             name: '产品管理'
           },
           {
             href: '/management/type',
             name: '分类管理'
           }
         ]
      }
   },
   methods: {

   }
}
</script>
<style lang="less">
.management-index {
  background-color: #FFFFFF;
  padding: 20px;
  .title {
    text-align: center;
    color: rgb(25,134,191);
  }
}
</style>


