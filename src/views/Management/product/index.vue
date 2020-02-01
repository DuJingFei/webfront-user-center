<template>
  <div class="products-index">
       <el-button 
          style="margin:4px;"
          @click="goAdd"
          type="primary" 
          icon="el-icon-plus"
        ></el-button>
        <el-table
          :data="productList"
          style="width: 1000px"
        >
          <el-table-column
            label="名称"
            width="180">
            <template slot-scope="scope">
              <label>{{ scope.row.name }}</label>
            </template>
          </el-table-column>
          <el-table-column
            label="类型"
            width="180">
            <template slot-scope="scope">
              <label>{{ scope.row.type }}</label>
            </template>
          </el-table-column>
          <el-table-column
            label="创建时间"
            width="180">
            <template slot-scope="scope">
              <label>{{ dateSimpleVersion(scope.row.createtime) }}</label>
            </template>
          </el-table-column>
          <el-table-column
            label="更新时间"
            width="180">
            <template slot-scope="scope">
              <label>{{ dateSimpleVersion(scope.row.updatetime) }}</label>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            width="180">
            <template slot-scope="scope">
              <el-button 
                type="primary"
                icon="el-icon-edit"
                @click="goItem(scope.row.id)"
              ></el-button>
              <el-button 
                  type="primary" 
                  icon="el-icon-delete" 
                  @click="deleteItem(scope.row.id)"
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
  </div>
</template>
<script>
export default {
  name: 'product-index',
  data() {
    return {
      productList: [],
    }
  },
  created() {
    this.getProductList();
  },
  methods: {
    addType() {
      this.$router.push('/management/type/add')
    },
    getProductList() {
      this.$fetch.get(this.$api.PRODUCT_LIST).then(res => {
        if (res.errorCode === 0) {
           this.productList = res.data;
        }
      })
    },
    goItem(id) {
      this.$router.push(`/management/product/${id}`)
    },
    deleteItem(id) {
      
    },
    goAdd() {
      this.$router.push('/management/product/add')
    }
  }
}
</script>