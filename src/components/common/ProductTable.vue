<template>
    <div class="date-table">
       <el-table
            :data="tableData"
            :header-cell-style="{ background:'#eef1f6',color:'#606266'}"
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
                 <i :class="`status-${statusAdapter(scope.row.status).identity}`" class="status-identity"></i> 
                 <span style="margin-left:3px;">{{statusAdapter(scope.row.status).name}}</span> 
            </template>
            </el-table-column>
            <el-table-column
            label="激活日期">
            <template slot-scope="scope">
                <span>{{toLocaleTimeStrng(scope.row.startDate,'-')}}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="服务有效期">
            <template slot-scope="scope">
                <span>{{toLocaleTimeStrng(scope.row.date,'-')}}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="操作">
            <template slot-scope="scope">
                <a class="a-blue" target="_blank" :href="scope.row.weed">前往官网</a>
            </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
   name: 'date-table',
   props: {
     tableData : [Array]
   },
   data() {
      return {
    
      }
   },
   methods: {
       statusAdapter(status) {
          switch(status) {
             case '1':
                 return { identity:'doing' , name: '使用中' };
             case '0':
                 return { identity:'expire' , name: '已过期' };
             case '2':
                 return { identity:'trial' , name: '试用中' } 
          }
       }
   }
}
</script>
<style lang="less">
.date-table {
   .el-table {
      font-size: 12px;
      thead {
        th {
            padding: 5px 0;
        }
      }
      .cell {
         display: flex;
         align-items: center;
      }
   }
}
</style>