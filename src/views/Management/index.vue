<template>
  <div class="management-index">
      <h1 class="title">Welcome to HYT Management</h1>
      <article>
        <el-button
          v-for='(item,i) in barList' 
          :key='i'
          :type='item.type'
          @click='goUrl(item.href)'
        >
          {{ item.name }}
        </el-button>
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
             href: '/management/banner/list',
             name: 'Banner管理',
             type: 'primary'
           },
           {
             href: '/management/product/list',
             name: '产品管理',
             type: 'success'
           },
           {
             href: '/management/type',
             name: '分类管理',
             type: 'info'
           },
           {
             href: '/management/service/list',
             name: '服务支持管理',
             type: 'danger'
           },
           {
             href: '/management/contact/list',
             name: '客户管理',
             type: 'warning'
           }
         ]
      }
   },
   methods: {
     goUrl(url) {
       if (url) {
         location.href = url;
       }
     }
   }
}
</script>
<style lang="less">
.management-index {
  background-color: #FFFFFF;
  padding: 20px;
  .title {
    text-align: center;
    color: #409EFF;
    margin: 50px 0;
  }
  article {
    text-align: center;
  }
}
</style>


