<template>
   <div class="management-index">
      <article class="banners">
         <el-button 
           style="margin:4px;"
           @click="goAdd"
           type="primary" 
           icon="el-icon-plus"
         ></el-button>
   
         <section>
           <el-table
             :data="serviceList"
             style="width: 1000px"
           >
              <el-table-column
                label="名称"
                width="180">
                  <template slot-scope="scope">
                     <label>{{ scope.row.name }}</label>
                  </template>
                </el-table-column>
                <!-- <el-table-column
                label="预览图"
                width="180">
                  <template slot-scope="scope">
                    <div
                     class="banner-view" 
                     :style="{'backgroundImage': `url('${scope.row.path}')`}"></div>
                  </template>
                </el-table-column> -->
                <el-table-column label="顺序">
                   <template slot-scope="scope">
                     <label>{{ scope.row.sort }}</label>
                   </template>
                </el-table-column>
                <el-table-column label="创建时间">
                   <template slot-scope="scope">
                     <label>
                       {{ dateSimpleVersion(scope.row.createDate) }}
                     </label>
                   </template>
                </el-table-column>
                <el-table-column label="更新时间">
                  <template 
                     slot-scope="scope"
                   >
                     <label>
                       {{ dateSimpleVersion(scope.row.updateDate) }}
                     </label>
                  </template>
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button 
                      type="primary" 
                      icon="el-icon-edit"
                      @click="goDetail(scope.row.id)"
                    ></el-button>
                    <el-button 
                      type="primary" 
                      icon="el-icon-delete" 
                      @click="deleteItem(scope.row.id)"
                    ></el-button>
                  </template>
                </el-table-column>
            </el-table>
         </section>
      </article>  
   </div>
</template>
<script>
export default {
   name: 'banners-index',
   data() {
      return {
         serviceList: []
      }
   },
   created() {
     this.loadServicelist();
   },
   methods: {
      loadServicelist() {
        this.$fetch.get(this.$api.SERVICE_LIST).then(res => {
          if (res.errorCode === 0) {
            this.serviceList = res.data;
          }
        })
      },
      goAdd() {
        this.$router.push(`/management/service/add`);
      },
      goDetail(id) {
        this.$router.push(`/management/service/${id}`);
      },
      deleteItem(id) {
        let _this = this;
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          _this.$fetch.delete(_this.$api.SERVICE_DETAIL, {
              id: id
          }).then(res => {
            _this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.loadServicelist();
          })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
   }
}
</script>
<style lang="less">
.management-index {
   .banner-view {
      width: 200px;
      height: 50px;
      background-size: cover;
   }
}
</style>