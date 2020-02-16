<template>
  <div class="management-contact-detail">
      <el-form
         class="form-content" 
         ref="detail" 
         :model="detail" 
         label-width="125px"
      >
        <div class='form-line'>
            <el-form-item label="Name" prop="name">
            <el-input 
                v-model="detail.name"
                size="mini"
            ></el-input>
            </el-form-item>
            <el-form-item label="Country" prop="country">
                <el-input 
                v-model="detail.country"
                size="mini"
                ></el-input>
            </el-form-item>
            <el-form-item label="Company" prop="company">
                <el-input 
                v-model="detail.company"
                size="mini"
                ></el-input>
            </el-form-item>
         </div>
         <div class='form-line'>
            <el-form-item label="Email" prop="email">
                <el-input 
                v-model="detail.email"
                size="mini"
                ></el-input>
            </el-form-item>
            <el-form-item label="Tel" prop="tel">
                <el-input 
                v-model="detail.tel"
                size="mini"
                ></el-input>
            </el-form-item>
         </div>
         <div class='form-line'>
          <el-form-item label="Website URL">
              <el-input 
              v-model="detail.url"
              size="mini"
              ></el-input>
          </el-form-item>
          <el-form-item label="Product Model" prop="company">
              <el-input 
              v-model="detail.productmodel"
              size="mini"
              ></el-input>
          </el-form-item>
         </div>
         <el-form-item label="Detail">
            <el-input 
              type="textarea"
              :rows="4"
              v-model="detail.detail"
              size="mini"
            ></el-input>
         </el-form-item>
      </el-form>
  </div>
</template>
<script>
export default {
  name: 'visitor-index',
  data() {
    return {
      detail: {
        name:'',
        country: '',
        company: '',
        tel: '',
        email: '',
        productmodel: '',
        createtime: '',
      }
    }
  },
  computed: {
    contactId() {
      return this.$route.params && this.$route.params.id;
    }
  },
  created() {
    if (this.contactId) {
      this.getDetail(this.contactId)
    }
  },
  methods: {
    getDetail(id) {
      if (!id) return
      this.$fetch.get(this.$api.CONTACT_DETAIL, { id: id }).then(res => {
        if (res.errorCode == 0) {
          this.detail = res.data
        }
      })
    }
  }
}
</script>
<style lang="less">
.visitor-index {
  
}
</style>