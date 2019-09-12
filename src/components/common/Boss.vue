<template>
    <div class="card-boss card">
      <img class="avatar" src="@/assets/images/boss.jpg" alt="徐少春"/>
      <span class="title">徐少春个人号</span>
      <el-button class="btn-middle" type="primary">进入</el-button>
    </div>
</template>
<script>
export default {
    name:'card-boss',
    
}
</script>
<style lang="less">
.card-boss {
    padding: 13px 16px;
    display: flex;
    align-items: center;
    .avatar {
        width: 34px;
        height: 34px;
        border-radius: 100%;
    }
    .title {
        margin-left: 17px;
        font-size: 14px;
        color: #333333;
        font-weight: bold;
    }
    .btn-middle {
       margin-left: auto;
       margin-right: 30px;
    }
}
</style>