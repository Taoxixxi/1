<template>
<div class="tabs">
  <el-row :gutter="20">
    <el-col :span="12" :offset="5">
      <div class="grid-content bg-purple">
        <ul class="second-tabs">
          <li index="1">全部</li>
          <li index="2">精华</li>
          <li index="3">分享</li>
          <li index="4">问答</li>
          <li index="5">招聘</li>
          <li index="6">客户端测试</li>
        </ul>
      </div>
    </el-col>
  </el-row>
</div>

</template>

<script>
    export default {
        name: "tabs"
    }
</script>

<style scoped>

  ul {
    list-style-type: none;
    padding: 0;
    width: 322.5px;
  }

  li {
    display: inline-block;
    margin: 0 5px;
  }
  .tabs >>> .el-row {
    margin: 0 0 20px 0!important;
  }

  .el-row :last-child {
    margin-bottom: 0;
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
  }
  .second-tabs li{
    color: #80bd01;
  }
</style>
