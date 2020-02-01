<template>
  <div class="type-index">
    <el-button 
        style="margin:4px;"
        @click="addType"
        type="primary" 
        icon="el-icon-plus"
      ></el-button>
      <el-table
          :data="typeList"
        >
        <el-table-column
          label="ID"
          width="180">
          <template slot-scope="scope">
            <label>{{ scope.row.Id }}</label>
          </template>
        </el-table-column>
        <el-table-column
          label="名称"
          width="180">
          <template slot-scope="scope">
            <label>{{ scope.row.name }}</label>
          </template>
        </el-table-column>
        <el-table-column
          label="父类ID"
          width="180">
          <template slot-scope="scope">
            <label>{{ scope.row.parentId }}</label>
          </template>
        </el-table-column>
        <el-table-column
          label="类型"
          width="180">
          <template slot-scope="scope">
            <label>{{ scope.row.classfy }}</label>
          </template>
        </el-table-column>
        <el-table-column
          label="序列号"
          width="180">
          <template slot-scope="scope">
            <label>{{ scope.row.orderIndex }}</label>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="180">
          <template slot-scope="scope">
            <el-button 
              type="primary"
              icon="el-icon-edit"
              @click="goItem(scope.row.Id)"
            ></el-button>
            <el-button 
                type="primary" 
                icon="el-icon-delete" 
                @click="deleteItem(scope.row.Id)"
            ></el-button>
          </template>
        </el-table-column>

      </el-table>
  </div>
</template>
<script>
export default {
  name: 'type-index',
  data() {
    return {
      typeList: [],

    }
  },
  created() {
    this.getTypeList();
  },
  methods: {
    getTypeList() {
      let _this = this;
      this.$fetch.get(this.$api.TYPE_LIST + `?classfy=1`).then(res => {
        if (!res.errorCode) {
          _this.typeList = res.data;
        }
      })
    },
    addType() {
      this.$router.push('/management/type/add')
    },
    goItem(id) {
      this.$router.push(`/management/type/${id}`)
    },
    deleteItem(id) {
      this.$fetch.delete(this.$api.TYPE_UPDATE , { id : id}).then(res => {
        debugger
      })
    }
  }
}
</script>
<style lang="less">
.type-index {

}
</style>