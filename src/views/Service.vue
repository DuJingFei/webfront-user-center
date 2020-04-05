<template>
  <div class="service-page">
    <div class="main-content">
      <a 
        v-for="(item,i) in serviceList"
        :key="i"
        class="service-item"
        :href="item.path" 
        target="blank"
      >
        <p class="item-label" :class="getFileType(item.path)"></p>
        <p class="item-name">{{item.name}}</p>
        <p class="item-description">{{item.description}}</p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'service-page',
  data() {
    return {
      serviceList: [],
    }
  },
  created() {
    this.getServicesList();
  },
  methods: {
     getServicesList() {
       this.$fetch.get(this.$api.SERVICE_LIST).then(res => {
         if (res.errorCode === 0) {
           this.serviceList = res.data;
         }        
       })
     }
  }
}
</script>
<style lang="less">
.service-page {
  text-align: center;
  background: #FFFFFF;
  overflow: hidden;
  .main-content {
    margin-top: 50px;
  }
  .service-item {
    display: inline-block;
    margin: 10px 10px;
    min-width: 150px;
    .item-label {
      width: 60px;
      height: 60px;
    }
  }
  p {
    text-align: center;
   
  }
}
</style>