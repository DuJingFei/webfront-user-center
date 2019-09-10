<template>
    <div class="date-table">
       <el-table
            :data="tableData"
            style="width: 677px">
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
</template>
<script>
export default {
   name: 'date-table',
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