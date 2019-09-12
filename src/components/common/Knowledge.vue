<template>
   <div class="card-knowledge card">
      <header>产品知识</header>
      <a class="a-blue" style="float:right" :href="host">查看更多</a>
      <ul v-loading="loading">
          <a 
            v-for="(item,i) in knowledgeList"
            :key="i"
            :href="item.id"
            >{{item.title | cut(24)}}</a>
      </ul>
   </div>
</template>
<script>
export default {
    name: 'card-knowledge',
    data() {
        return {
            loading: true,
            knowledgeList: [
                {
                    title: '怎样实现在凭证上面显示及打印现金流量信息怎样实现在凭证上面显示及打印现金流量信息？？',
                    id:121
                },
                {
                    title: '怎样实现在凭证上面显示及打印现金流量信息？',
                    id:121
                },
                {
                    title: '怎样实现在凭证上面显示及打印现金流量信息？',
                    id:121
                },
                {
                    title: '怎样实现在凭证上面显示及打印现金流量信息？',
                    id:121
                },
                {
                    title: '怎样实现在凭证上面显示及打印现金流量信息？',
                    id:121
                },
                {
                    title: '怎样实现在凭证上面显示及打印现金流量信息？',
                    id:121
                }
            ]
        }
    }
}
</script>
<style lang="less">
.card-knowledge {
   padding: 20px 24px;
   > header {
       margin-bottom: 24px;
   }
   ul {
      a {
        display: inline-block;
        line-height: 20px;
        margin-bottom: 14px;
      }
   }
}
</style>