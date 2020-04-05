<template>
  <div>
    <!-- 图片上传组件:这里整合的是elementUI的组件-->
    <input
      style="width:0;height:0;position:absolute"
      :class='"avatar-uploader" + id' 
      type="file" 
      name="file" 
      accept=".jpg, .jpeg, .png" 
      @change="uploadAvatar">
    <!--
    <el-upload
        class='avatar-uploader'
        :action='serverUrl'
        name='file'
        :headers='header'
        :show-file-list='false'
        :on-success='uploadSuccess'
        :on-error='uploadError'
        :before-upload='beforeUpload'>1212
    </el-upload>
    -->
	<!-- 实际富文本显示区域 -->
    <quill-editor
        class='editor'
        v-model='content'
        ref='myQuillEditor'
        :options='editorOption'
        @blur='onEditorBlur($event)' @focus='onEditorFocus($event)'
        @change='onEditorChange($event)'>
    </quill-editor>
  </div>
</template>
<script>
// 需要引入的文件
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// 工具栏配置
const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线
  ['blockquote', 'code-block'], // 引用  代码块
  [{ header: 1 }, { header: 2 }], // 1、2 级标题
  [{ list: 'ordered' }, { list: 'bullet' }], // 有序、无序列表
  [{ script: 'sub' }, { script: 'super' }], // 上标/下标
  [{ indent: '-1' }, { indent: '+1' }], // 缩进
  // [{'direction': 'rtl'}],                         // 文本方向
  [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
  [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
  [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
  [{ font: [] }], // 字体种类
  [{ align: [] }], // 对齐方式
  ['clean'], // 清除文本格式
  ['link', 'image'] // 链接、图片、视频 ['link', 'image', 'video']
]
export default {
  props: {
    /* 编辑器的内容 */
    value: {
      type: String
    },
    id: {
      type: String,
      default: 'myQuillEditor'
    },
    /* 图片大小 */
    maxSize: {
      type: Number,
      default: 1024 * 5 // kb
    }
  },
  components: {
    quillEditor
  },
  data () {
    let _this = this;
    return {
      content: this.value,
      quillUpdateImg: false, // 根据图片上传状态来确定是否显示loading动画，刚开始是false,不显示
      editorOption: {
        theme: 'snow', // or 'bubble'
        placeholder: '请在这里输入...',
        modules: {
          toolbar: {
            container: toolbarOptions,
            handlers: {
              // 处理图片上传
              image: function (value) {
                if (value) {
                  // 触发input框选择图片文件
                  document.querySelector(".avatar-uploader" + _this.id).click()
                } else {
                  this.quill.format('image', false)
                }
              }
            }
          }
        }
      },  
      serverUrl: 'http://localhost:6741/upload',
    /*  serverUrl: `${window.SITE_CONFIG['apiURL']}/demo/upload/upload?type=1&token=${Cookies.get('token')}`, // 这里写你要上传的图片服务器地址 */
     imageBaseUrl: this.$api.UPLOAD,
    //  imageBaseUrl: `${window.SITE_CONFIG['imgBaseUrl']}`, // 这里写你要上传的图片服务器地址
      header: {
        // token: sessionStorage.token
      } // 有的图片服务器要求请求头需要有token
    }
  },
  methods: {
    onEditorBlur () {
      // 失去焦点事件
    },
    onEditorFocus () {
      // 获得焦点事件
    },
    onEditorChange () {
      // 内容改变事件
      this.$emit('input', this.content)
    },
    uploadAvatar(banner) {
      let _this = this;
      let file = banner.target.files[0]
      let data = new FormData();
      data.append("file", file, file.name);//很重要 
      data.append('data',112)
      console.log(data.get('file'))
      return this.$fetch.post('/api/upload', data, {
        headers: { "content-type": "multipart/form-data" }
      }).then(res => {
        if (res.errorCode === 0) {
            _this.content = `${_this.content}<img src='${res.data.path}' />`
          // this.detail.path = res.data.path;
        }
      })
    },
  }
}
</script>
<!-- 富文本样式，需要加哦，不然有问题 -->
<style>
  .editor {
    line-height: normal !important;
    min-height: 300px;
  }
  .ql-editor {
    background-color: #FFFFFF;
  }
  .ql-snow .ql-tooltip[data-mode=link]::before {
    content: '请输入链接地址:';
  }
  .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    border-right: 0px;
    content: '保存';
    padding-right: 0px;
  }

  .ql-snow .ql-tooltip[data-mode=video]::before {
    content: '请输入视频地址:';
  }

  .ql-snow .ql-picker.ql-size .ql-picker-label::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item::before {
    content: '14px';
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {
    content: '10px';
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {
    content: '18px';
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {
    content: '32px';
  }

  .ql-snow .ql-picker.ql-header .ql-picker-label::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item::before {
    content: '文本';
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    content: '标题1';
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    content: '标题2';
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    content: '标题3';
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    content: '标题4';
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    content: '标题5';
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    content: '标题6';
  }

  .ql-snow .ql-picker.ql-font .ql-picker-label::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item::before {
    content: '标准字体';
  }
  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {
    content: '衬线字体';
  }
  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {
    content: '等宽字体';
  }
</style>
