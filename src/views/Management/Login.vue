<template>
  <div class="login-page">
     <div class="card login-box">
       <h2>Welcome to Management System</h2>
       <el-form :model="loginData" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
        <el-form-item label="登录名" prop="name">
          <el-input v-model="loginData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginData.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitLogin('loginData')">登录</el-button>
          <el-button @click="resetForm('loginData')">重置</el-button>
        </el-form-item>
      </el-form>
     </div>
  </div>
</template>
<script>
export default {
  name: 'login-index',
  data() {
    return {
      loginData: {
         username: '',
         password: ''
      },
      rules: {
          name: [
            { required: true, message: '请输入管理员账号名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
      }
    }
  },
  methods: {
    submitLogin() {
    
      if (!this.loginData.username || !this.loginData.password) return
      /*
      let params = {
        username: this.loginData.username,
        password: escape(this.loginData.password)
      } */
      this.$fetch.post(this.$api.LOGIN, this.loginData).then(res => {
        debugger
      })
    }
  }
}
</script>
<style lang="less">
.login-page {
  background-image: url('../../assets/images/background-stars.jpg');
  height: 100%;
  background-size: cover;
  overflow: hidden;
  position: relative;
  .login-box {
    width: 450px;
    padding: 20px 30px;
    position: absolute;
    right: 160px;
    top: 150px;
    h2 {
        margin-bottom: 30px;
        color: #2386ee;
    }
  }
}
</style>