<template>
  <div class="user-basic card">
     <article class="avatar-section">
        <img src="@/assets/images/Judentus.png" class="avatar-big" alt="avatar"/>
        <div style="width:80px;">
           <p class="label">信息完整度：</p>
           <el-progress class="program-line" :text-inside="true" :stroke-width="11" :percentage="70"></el-progress>
        </div>
     </article>
     <article class="user-data">
        <p class="user-name">{{user.name}}
            <i class="manager-identity">管理员</i>
        </p>
        <p class="compony">
            {{user.compony}}
            <a style="color:#5582F3;margin-left:14px;" href="/">前往企业账号中心</a>
        </p>
        <el-button class="btn-primary">编辑</el-button>
        <el-button class="btn-primary">完善信息</el-button>
     </article>
  </div>
</template>
<script>
export default {
   name:'user-basic',
   data() {
      return {
         user: {
            name: '杜景霏',
            rank: 6,
            compony: '金蝶软件（中国）有限公司'
         }
      }
   }
}
</script>
<style lang="less">
.user-basic {
   padding: 26px;
   .avatar-section {
      display: inline-block;
      float: left;
      .avatar-big {
        width: 80px;
        height: 80px;
        border-radius: 80px;
      }
      .label {
          margin: 11px 0 6px 0;
          font-size: 11px;
          color: #666666;
          line-height: 12px;
      }
      .program-line {
          font-size: 10px;
          .el-progress-bar__inner {
              line-height: 8px;
          }
      }
   }
   .user-data {
      display: inline-block;
      border-left: 1px solid #D8D8D8;
      height: 127px;
      margin-left: 40px;
      padding-left: 40px;
      .user-name {
        font-size: 18px;
        color: #333333;
        display: flex;
        align-items: center;
      }
      .manager-identity {
         margin-left: 9px;
      }
      .compony {
        font-size: 12px;
        color: #666666;
        line-height: 17px;
        margin: 27px 0;
      }
      .btn-primary {
        width: 86px;
        height: 28px;
        line-height: 28px;
        padding: 0;
        border: 1px solid#5582F3;
        color: #5582F3;
      }
   }
}
</style>