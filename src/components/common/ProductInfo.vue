<template>
    <div class="product-info card">
       <header>我的产品</header>
       <p style="margin:20px 0;line-height:20px">
          <span class="formal">正式产品: 2个</span>
          <span class="trial">试用产品: 2个</span>
       </p>
       <div class="main-table">
           <!-- 产品名称、序列号/域名   状态  激活日期  服务有效期  操作 -->
          <el-table
            :data="tableData"
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
            style="width: 677px;margin:auto">
              <el-table-column
                label="产品名称"
                >
                <template slot-scope="scope">
                    <span>{{scope.row.name}}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="序列号/域名">
                <template slot-scope="scope">
                    <span>{{scope.row.number}}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="状态">
                <template slot-scope="scope">
                    <span>{{scope.row.name}}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="激活日期">
                <template slot-scope="scope">
                    <span>{{scope.row.startDate}}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="服务有效期">
                <template slot-scope="scope">
                    <span>{{scope.row.date}}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="操作">
                <template slot-scope="scope">
                    <a :href="scope.row.weed">前往官网</a>
                </template>
              </el-table-column>
          </el-table>
       </div>
    </div>
</template>
<script>
export default {
   name: 'product-info',
   data() {
       return {
           tableData: [
              {
                  name: '金蝶云星空',
                  number: '1212',
                  status: '正常',
                  startDate: '2018-09-12',
                  date: '2020-03-28',
                  url:'weed'
              },
              {
                  name: '金蝶云星空',
                  number: '1212',
                  status: '正常',
                  startDate: '2018-09-12',
                  date: '2020-03-28',
                  url:'weed'
              },
              {
                  name: '金蝶云星空',
                  number: '1212',
                  status: '正常',
                  startDate: '2018-09-12',
                  date: '2020-03-28',
                  url:'weed'
              },
              {
                  name: '金蝶云星空',
                  number: '1212',
                  status: '正常',
                  startDate: '2018-09-12',
                  date: '2020-03-28',
                  url:'weed'
              },
              {
                  name: '金蝶云星空',
                  number: '1212',
                  status: '正常',
                  startDate: '2018-09-12',
                  date: '2020-03-28',
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
}
</style>