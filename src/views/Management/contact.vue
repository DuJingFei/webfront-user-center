<template>
  <div class="management-contact-index">
    <el-table
      v-if="contactList && contactList.length > 0"
      :data="contactList"
      style="width: 1200px;margin:30px auto"
    >
      <el-table-column
        label="姓名"
        width="180">
          <template slot-scope="scope">
              <label>{{ scope.row.name }}</label>
          </template>
        </el-table-column>

        <el-table-column label="国家">
            <template slot-scope="scope">
              <label>{{ scope.row.country }}</label>
            </template>
        </el-table-column>
        <el-table-column label="公司">
            <template slot-scope="scope">
              <label>{{ scope.row.company }}</label>
            </template>
        </el-table-column>
        <el-table-column label="电话">
            <template slot-scope="scope">
              <label>{{ scope.row.tel }}</label>
            </template>
        </el-table-column>
        <el-table-column label="Email">
            <template slot-scope="scope">
              <label>{{ scope.row.email }}</label>
            </template>
        </el-table-column>
        <el-table-column label="需求">
            <template slot-scope="scope">
              <label>{{ scope.row.productmodel }}</label>
            </template>
        </el-table-column>
        <el-table-column label="创建时间">
            <template slot-scope="scope">
              <label>
                {{ dateSimpleVersion(scope.row.createtime) }}
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
  </div>
</template>
<script>
export default {
  name: 'management-contact-index',
  data() {
    return {
      contactList: '',
    }
  },
  created() {
    this.getContactList();
  },
  methods: {
    getContactList() {
      this.$fetch.get(this.$api.CONTACT_LIST).then(res => {
        if (!res.errorCode) {
          this.contactList = res.data;
        }
      })
    }
  }
}
</script>