<template>
  <div class="type-editor">
    <el-form
      class="form-content" 
      ref="type" 
      :rules="rules"
      :model="type" 
      label-width="80px"
    >
      <el-form-item label="名称" prop="name">
        <el-input 
          v-model="type.name"
        ></el-input>
      </el-form-item>
      <el-form-item label="父类Id" prop="parentId">
        <el-input 
          v-model="type.parentId"
        ></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="content">
        <quill-editor 
          :key="reload"
          ref="quillEditor" 
          v-model="type.content"/>
      </el-form-item>
      <el-form-item label="类型" prop="cases">
        <el-select v-model="type.classfy" placeholder="请选择">
          <el-option
            v-for="item in classfyList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <div class='manipulate' style='text-align: center;'>
        <el-button 
         type="primary" 
         @click="submit('type')"
        >
         {{ productId ? '更新' : '立即创建' }} 
        </el-button>
        <el-button>取消</el-button>
      </div>
    </el-form>
  </div>
</template>
<script>
import QuillEditor from '../../../components/quilleditor/quill-editor'
export default {
   components: {
     QuillEditor // 组件还是要写的，和import名保持一致。
   },
   name: 'product-editor',
   data () {
    return {
      reload: 1, // 通过key值的变化促使子组件重新渲染，这里 vue-quill-editor 只能通过重新渲染的方式解决异步获取数据的显示问题
      type: {
        name: '',
        content: '',
        parentId: '',
        classfy: ''
      },
      classfyList: [
        {
            label: '产品',
            value: 1
        },
        {
            label: '解决方案',
            value: 2
        },
        {
            label: '案例',
            value: 3
        }
      ],
      rules: {
        name: [
          { required: true, message: '请录入分类名称', trigger: 'blur' }
        ]
      },
      typelist: [
        {
          value: 1,
          label: '数字变频器'
        },
        {
          value: 2,
          label: '音频变频器'
        },
        {
          value: 3,
          label: '灌溉器'
        },
      ]
    }
  },
  computed: {
    productId() {
      return this.$route.params && this.$route.params.id;
    }
  },
  created() {
    if (this.productId) {
      this.getDetail(this.productId)
    }
  },
  methods: {
    getDetail(id) {
      let _this = this;
      this.$fetch.get(this.$api.TYPE_UPDATE, { id: id }).then(res => {
        if (res.errorCode === 0) {
      
          _this.type = res.data;
          this.reload = 2;
        //  _this.$refs.quillEditor.$forceUpdate();
        }
      })
    },
    submit(type) {
      let _this = this;
      this.$refs[type].validate((valid) => {
        if (!valid) {
          return this.$message.error('请完善必填属性');
        }
        if (this.productId) {
          this.$fetch.post(this.$api.TYPE_UPDATE, this.type).then(res => {
            if (res.errorCode === 0) {
              _this.$message.success('更新成功');
              setTimeout(() => {
                _this.$router.push('/management/type')
              },1000)
            }
          })
        }
        else {
          this.$fetch.post(this.$api.TYPE_ADD, this.type).then(res => {
            if (res.errorCode === 0) {
              _this.$message.success('发布成功');
              setTimeout(() => {
                _this.$router.push('/management/type')
              },1000)
            }
          })
        }
      })
    }
  }
}
</script>
<style lang="less">
.type-editor {
   background-color: #FFFFFF;
   .form-content {
     width: 800px;
     margin: 0 auto;
     .preview {
       position: relative;
       display: inline-block;
       .el-icon-delete {
         position: absolute;
         right: 0;
       }
       img {
         width: 300px;
       }
     }
   }
}
</style>