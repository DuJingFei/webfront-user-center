<template>
  <div class="service-page">
    <div class="main-content">
      <el-table
        :data="serviceList"
        class='table-service'
        stripe
        style="width: 800px; margin:0 auto;">
        <el-table-column
          label="Name"
          width="200">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="Description"
          width="400">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.description }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="Type"
          width="100">
          <template slot-scope="scope">
            <p class="item-label" :class="getFileType(scope.row.path)"></p>
          </template>
        </el-table-column>
        <el-table-column
          label="DownLoad"
          width="100"
        >
          <template slot-scope="scope" style="text-align:center">
            <a 
              :href="scope.row.path" 
              target="blank"
            >
              <i class="el-icon-download"></i>
            </a>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'service-page',
  data() {
    return {
      serviceList: [],
    }
  },
  created() {
    this.getServicesList();
  },
  methods: {
     getServicesList() {
       this.$fetch.get(this.$api.SERVICE_LIST).then(res => {
         if (res.errorCode === 0) {
           this.serviceList = res.data;
         }        
       })
     }
  }
}
</script>
<style lang="less">
.service-page {
  text-align: center;
  background: #FFFFFF;
  overflow: hidden;
  .main-content {
    margin-top: 50px;
  }
  .el-table_1_column_4 {
    text-align: center;
  }
}
</style>