<template>
  <div class="product-list">
    <section class="tree-area">
      <el-tree 
        class="type-tree"
        :data="typeList" 
        node-key="Id"
        :default-expanded-keys="[curTypeId]"
        :props="defaultProps"
        @node-click="handleNodeClick" 
      />
    </section>
    <section class="product-list-area">
      <h1 class="type-name">{{ curTypeDetail.name }}</h1>
      <div 
        v-if="curTypeDetail.content && curTypeDetail.content.length > 0"
        v-html="curTypeDetail.content"
      ></div>
      <section class="product-list">
        <template v-if='productList && productList.length > 0'>
          <div 
            class="product-item card" 
            v-for="(item,i) in productList" 
            :key="i"
          >
            <a 
              style='display: inline-block; width: 100%;' 
              :href="`/product/${item.id}`" 
              target='blank'
            >
              <header :style="{'backgroundImage': `url('${item.image}')`}"></header>
              <article>
                <h3>{{ item.name }}</h3>
                <p>{{ item.content }}</p>
              </article>
            </a>
          </div>
        </template>
      </section>
    </section>
  </div>
</template>
<script>
export default {
  name: 'product-list',
  data() {
    return {
      data: [{
          label: '一级 1',
          id: 1,
          children: [{
            label: '二级 1-1',
            id: 2,
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'name'
        },
        curTypeId: '',
        curTypeDetail: {
          Id: '',
          name: '',
          content: '',
          classfy: ''
        },
        typeList: [],
        productList: [],
    }
  },
  watch: {
    curTypeId(newVal , val) {
      if (newVal !== null) {
        this.getRelativeProducts(newVal);
      }
    }
  },
  created() {
    this.getTypes();
  },
  methods: {
    getTypes() {
      this.$fetch.get(this.$api.TYPE_LIST_TREE + '?classfy=1').then(res => {
        if (res.errorCode == 0) {
          this.typeList = res.data;
          if (this.typeList && this.typeList.length > 0)
          this.curTypeId = this.typeList[0].Id;
          if (this.curTypeId !== null) {
            this.getTypeItem(this.curTypeId);
          }
        }
      })
    },
    getTypeItem(typeId) {
      if (typeId == null) return
      this.$fetch.get(this.$api.TYPE_UPDATE , { id : typeId }).then(res => {
        if (res.errorCode == 0) {
          this.curTypeDetail = res.data;
        }
      })
    },
    getRelativeProducts(typeId) {
      this.$fetch.get(`${this.$api.PRODUCT_LIST}?typeId=${typeId}`).then(res => {
        if (res.errorCode == 0) {
          this.productList = res.data;
        }
      })
    },
    handleNodeClick(data) {
      this.curTypeId = data.Id;
      this.getTypeItem(this.curTypeId);
    },
  }
}
</script>
<style lang="less">
.product-list {
  width: 1200px;
  margin: 0 auto;
  .tree-area {
    width: 290px;
    margin-right: 10px;
    float: left;
    color: #000;
    .type-tree {
      .el-tree-node__content {
        height: 40px;
      }
      .el-tree-node:focus {
        .el-tree-node__content { 
         // font-weight: bold;
        }
      }
    }
  }
  .product-list-area {
    background-color: #ffffff;
    width: 870px;
    padding: 15px;
    float: left;
    > h1 {
      font-size: 28px;
    }
    .type-name {
      margin-bottom: 10px;
    }
    .product-list {
      overflow: hidden;
      margin-top: 15px;
      .product-item {
        width: 230px;
        float: left;
        margin: 15px;
        position: relative;
        box-shadow: 1px 3px 13px rgba(26, 26, 26, 0.1);
        header {
          width: 100%;
          height: 230px;
          background-repeat: no-repeat;
          background-size: contain;
        }
        article {
          padding: 10px;
          > h3 {
            
          }
          P {
            
          }
        }
      }
    }
  }
}
</style>