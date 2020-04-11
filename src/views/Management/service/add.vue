<template>
  <div 
    class="banner-add">
     <el-card class="box-card">
      <el-form
         class="form-content" 
         ref="detail" 
         :rules="rules"
         :model="detail" 
         label-width="80px"
      >
         <el-form-item label="名称" prop="name">
               <el-input 
               v-model="detail.name"
               size="mini"
               ></el-input>
         </el-form-item>
         <el-form-item label="顺序">
               <el-input 
               v-model="detail.sort"
               size="mini"
               ></el-input>
         </el-form-item>
         <el-form-item label="描述">
            <el-input 
              v-model="detail.description"
              type="textarea"
              :rows="2"
            ></el-input>
         </el-form-item>
         <el-form-item label="文件" prop="path">
            <div v-if="detail.path" class="preview">
                  <i 
                    class="icon-word"
                    :class="getFileType(detail.path)" 
                    @click="deleteItem"
                  ></i>
            </div>
            <input 
              v-else 
              type="file" 
              name="file" 
              @change="uploadAvatar"
            >
         </el-form-item>
         <el-form-item>
            <el-button 
                type="primary" 
                @click="submitService('detail')"
            >
                {{ sourceId ? '更新' : '立即创建' }} 
            </el-button>
            <el-button @click="$router.push('/management/service/list')">取消</el-button>
         </el-form-item>
         </el-form>
      </el-card>
  </div>
</template>
<script>
export default {
   name: 'banner-add',
   data() {
      return {
         detail: {
            name: '',
            path: '',
            description: '',
            sort: '',
            updateDate: '',
            createDate: ''
         },
         rules: {
          name: [
            { required: true, message: '请输入文件名', trigger: 'blur' }
          ],
          path: [
            { required: true, message: '请上传文件', trigger: 'change' }
          ]
        }
      }
   },
   computed: {
     sourceId() {
        return this.$route.params && this.$route.params.id;
     }
   },
   created() {
     if (this.sourceId) {
       this.getServiceDetail(this.sourceId);
     }
   },
   methods: {
     getServiceDetail(id) {
       let _this = this;
       this.$fetch.get(this.$api.SERVICE_DETAIL, {
         id: id
       }).then(res => {
         if (res.errorCode === -1) {
            this.$message.error('资源不存在');
            setTimeout(function() {
              _this.$router.push('/management/service/list')
            },1000)
         }
         if (res.errorCode === 0) {
           this.detail = res.data;
         }
       })
     },
     uploadAvatar(banner) {
         let file = banner.target.files[0]
         let data = new FormData();
         data.append("file", file, file.name);//很重要 
         data.append('data',112)
         console.log(data.get('file'))
         return this.$fetch.post('/api/upload', data, {
            headers: { "content-type": "multipart/form-data" }
         }).then(res => {
            if (res.errorCode === 0) {
              this.detail.path = res.data.path;
            }
         })
     },
     deleteItem() {
       this.detail.path = '';
     },
     submitService(detail) {
       this.$refs[detail].validate((valid) => {
         if (!valid) {
           return this.$message.error('请完善必填属性');
         }
         let API = this.sourceId ? this.$api.SERVICE_DETAIL : this.$api.SERVICE_ADD

         if (!this.sourceId) {  // 如果是新建banner，添加创建时间
            this.detail.createDate = new Date().getTime();
         }

         this.detail.createDate = new Date().getTime();

         this.$fetch.post(API, this.detail) .then(res => {
            if (res.errorCode === 0) {
              this.$message.success(this.sourceId ? '更新成功' : '新建成功');
              setTimeout(() => {
                this.$router.push('/management/service/list')
              },2000)
            }
         })

       })
     }
   }
}
</script>
<style lang="less">
.banner-add {
   .box-card {
      width: 700px
   }
   .el-input__inner {
     // width: 300px;
   }
   .form-content {
     // max-width: 500px;
   }
   .preview {
       position: relative;
       width: 300px;
       .el-icon-delete {
          position: absolute;
          right: 0;
          color: #FFF;
          cursor: pointer;
       }
       img {
           width: 100%;
       }
   }
   .icon-word {
     cursor: pointer;
   }
}
</style>