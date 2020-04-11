<template>
  <div class="contact-us">
    <section>
      <h1>Contact us</h1>
      <h3>to get the first time infomation, we strongly suggest you to send your need to us by Email</h3>
      <el-form
         class="form-content" 
         ref="detail" 
         :rules="rules"
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
         <el-form-item>
            <el-button 
                type="primary" 
                @click="submitInfo('detail')"
            >
              submit
            </el-button>
         </el-form-item>
      </el-form>
    </section>
  </div>
</template>
<script>
export default {
  name: 'contact-us',
  data() {
    return {
      detail: {
        name: '',
        country: '',
        company: '',
        tel: '',
        url: '',
        email: '',
        productmodel: '',
        detail: ''
      },
      rules: {
        name: [
          { required: true, message: 'please input Name', trigger: 'blur' }
        ],
        country: [
          { required: true, message: 'please input country', trigger: 'blur' }
        ],
        company: [
          { required: true, message: 'please input company', trigger: 'blur' }
        ],
        tel: [
          { required: true, message: 'please input tel', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'please input email', trigger: 'blur' }
        ],
        productmodel: [
          { required: true, message: 'please input productmodel', trigger: 'blur' }
        ],
      }
    }
  },
  mounted() {
    if (this.$route.query && this.$route.query.model) {
      this.detail.productmodel = encodeURI(this.$route.query.model); 
    }
  },
  methods: {
    submitInfo(detail) {
      let _this = this;
      this.$refs[detail].validate((valid) => {
        if (!valid) {
          return this.$message.error('please ');
        }
        this.$fetch.post(this.$api.CONTACT, this.detail).then(res => {
          if (res.errorCode == 0) {
            this.$message.success('thank you for contact us');
            setTimeout(function() {
              _this.$router.push('/');
            },2000)
          }
        })
      })
    }
  }
}
</script>
<style lang="less">
.contact-us {
  background-color: #FFFFFF;
  overflow: hidden;
  h1 {
    text-align: center;
    margin-top: 30px;
  }
  h3 {
    text-align: center;
    margin-top: 30px;
  }
  .form-content {
    max-width: 900px;
    margin: 50px auto;
    .form-line {
      display: flex;
      height: 80px;
    }
  }
}
</style>