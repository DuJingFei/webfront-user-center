<template>
   <div class="management-index">
      <article class="banners">
         <a href="/banner/add"><i class="el-icon-plus"/></a>
         <section>
            <el-table
    :data="bannerList"
    style="width: 1000px">
                <el-table-column
                label="名称"
                width="180">
                <template slot-scope="scope">
                    <el-input v-model='scope.row.name'></el-input>
                </template>
                </el-table-column>
                <el-table-column
                label="预览图"
                width="180">
                <template slot-scope="scope">
                    <div v-if="scope.row.path" class="banner-view" :style="{'backgroundImage': `url('${scope.row.path}')`}"></div>
                    <div v-else>
                       <input type="file" name="file" accept=".jpg, .jpeg, .png" @change="uploadAvatar">
                    </div>
                </template>
                </el-table-column>
                <el-table-column label="顺序">
                   <template slot-scope="scope">
                      <el-input v-model="scope.row.sort"></el-input>
                   </template>
                </el-table-column>
                <el-table-column label="创建时间">
                   <template slot-scope="scope">
                      <el-input v-model="scope.row.createDate"></el-input>
                   </template>
                </el-table-column>
                <el-table-column label="更新时间">
                   <template slot-scope="scope">
                      <el-input v-model="scope.row.updateDate"></el-input>
                   </template>
                </el-table-column>
                <el-table-column label="操作">
                   <template slot-scope="scope">
                      <el-button type="primary" icon="el-icon-edit"></el-button>
                      <el-button type="primary" icon="el-icon-delete" @click="delete(scope.row.Id)"></el-button>
                   </template>
                </el-table-column>
            </el-table>
         </section>
      </article>  
   </div>
</template>
<script>
export default {
   name: 'management-index',
   data() {
      return {
         bannerList: [
            {
                name: 'banner',
                path: '/images/b1.jpg',
                sort: 1,
                createDate: 16273822332,
                updateDate: 16273822332
            },
            {
                name: 'banner',
                path: '',
                sort: 1,
                createDate: 16273822332,
                updateDate: 16273822332
            },
            {
                name: 'banner',
                path: '~/ssdww',
                sort: 1,
                createDate: 16273822332,
                updateDate: 16273822332
            },
            {
                name: 'banner',
                path: '~/ssdww',
                sort: 1,
                createDate: 16273822332,
                updateDate: 16273822332
            },
            {
                name: 'banner',
                path: '~/ssdww',
                sort: 1,
                createDate: 16273822332,
                updateDate: 16273822332
            }
         ]
      }
   },
   methods: {
      add() {
         this.router('/banner/add')
      },
      uploadAvatar(banner) {
         let file = banner.target.files[0]
         let data = new FormData();
         data.append("file", file, file.name);//很重要 
         data.append('data',112)
         console.log(data.get('file'))
        debugger
         return this.$axios.post('/api/upload', data, {
            headers: { "content-type": "multipart/form-data" }
         }).then(res => {
            debugger
         })
      }
   }
}
</script>
<style lang="less">
.management-index {
   .banner-view {
      width: 200px;
      height: 50px;
      background-size: cover;
   }
}
</style>


