<template>
  <div class="product-editor">
    <el-form
      class="form-content" 
      ref="product" 
      :rules="rules"
      :model="product" 
      label-width="80px"
    >
      <el-form-item label="名称" prop="name">
        <el-input 
          v-model="product.name"
        ></el-input>
      </el-form-item>
      <el-form-item label="创建时间" prop="createtime" v-if="product.createtime">
        <span>{{ dateSimpleVersion(product.createtime) }}</span>
      </el-form-item>
      <el-form-item label="类型" prop="type">
        <el-select v-model="product.type" placeholder="请选择">
          <el-option
            v-for="(item,i) in typeList"
            :key="item.Id + i"
            :label="item.name"
            :value="item.Id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="型号" prop="model">
        <el-input 
          v-model="product.model"
        ></el-input>
      </el-form-item>
      <el-form-item label="封面图" prop="image">
        <div v-if="product.image" class="preview">
            <i class="el-icon-delete" @click="deleteItem"></i>
            <img :src="product.image" />
        </div>
        <input v-else type="file" name="file" accept=".jpg, .jpeg, .png" @change="uploadAvatar">
      </el-form-item>
      <el-form-item label="内容" prop="content">

        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="product.content">
        </el-input>
        <!--
        <quill-editor 
          :key="reload1"
          id='contentEditor'
          ref="content" 
          v-model="product.content"/>
        -->
      </el-form-item>
      <el-form-item label="specification" prop="specification">
        <quill-editor 
          class="specification-editor"
          id='specificationEditor'
          :key="reload2"
          ref="specification" 
          v-model="product.specification"/>
      </el-form-item>
      <el-form-item label="benefit" prop="benefit">
        <quill-editor 
          :key="reload3"
          id='benefitEditor'
          ref="benefit" 
          v-model="product.benefit"/>
      </el-form-item>
       <el-button 
         type="primary" 
         @click="submit('product')"
       >
         {{ productId ? '更新' : '立即创建' }} 
       </el-button>
       <el-button @click="$router.push('/management/product/list')">取消</el-button>

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
      reload1: 1, // 通过key值的变化促使子组件重新渲染，这里 vue-quill-editor 只能通过重新渲染的方式解决异步获取数据的显示问题,
      reload2: 1,
      reload3: 1,
      product: {
        name: '',
        model: '',
        type: '',
        image: '',
        content: '',
        specification: '',
        benefit: ''
      },
      rules: {
        name: [
          { required: true, message: '请录入产品名称', trigger: 'blur' }
        ],
        specification: [
          { required: true, message: '请录入specification', trigger: 'change' }
        ],
        benefit: [
          { required: true, message: '请录入benefit', trigger: 'change' }
        ]
      },
      typeList: [],
    }
  },
  computed: {
    productId() {
      return this.$route.params && this.$route.params.id;
    }
  },

  created() {
    this.getTypeList();
    if (this.productId) {
      this.getDetail(this.productId)
    }
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
    getDetail(id) {
      let _this = this;
      this.$fetch.get(this.$api.PRODUCT_DETAIL, { id: id }).then(res => {
        if (res.errorCode === 0) {
      
          _this.product = res.data;
          this.reload1 = 2;
          this.reload2 =2;
          this.reload3 =2;
        //  _this.$refs.quillEditor.$forceUpdate();
        }
      })
    },
    deleteItem() {
      this.product.image = '';
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
            this.product.image = res.data.path;
          }
        })
    },
    submit(product) {
      let _this = this;
      this.$refs[product].validate((valid) => {
        if (!valid) {
          return this.$message.error('请完善必填属性');
        }
        let API = this.productId ?  this.$api.PRODUCT_DETAIL : this.$api.PRODUCT_ADD;
        this.$fetch.post(API, this.product).then(res => {
          if (res.errorCode === 0) {
            _this.$message.success(this.productId ? '更新成功': '发布成功');
            setTimeout(() => {
              _this.$router.push('/management/product/list')
            },1000)
          }
        })
      }) 
    }
  }
}
</script>
<style lang="less">
.product-editor {
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