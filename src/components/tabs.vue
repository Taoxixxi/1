<template>
  <div class="tabs">
    <el-row :gutter="20">
      <el-col :span="12" :offset="0">
        <div class="grid-content bg-purple bg-div">
          <!--<ul class="second-tabs">-->
          <!--<li index="1">全部</li>-->
          <!--<li index="2">精华</li>-->
          <!--<li index="3">分享</li>-->
          <!--<li index="4">问答</li>-->
          <!--<li index="5">招聘</li>-->
          <!--<li index="6">客户端测试</li>-->
          <!--</ul>-->
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">全部</el-menu-item>
            <el-menu-item index="2">精华</el-menu-item>
            <el-menu-item index="3">分享</el-menu-item>
            <el-menu-item index="4">问答</el-menu-item>
            <el-menu-item index="5">招聘</el-menu-item>
            <el-menu-item index="6">客户端测试</el-menu-item>
          </el-menu>
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
  export default {
    name: "tabs",
    data() {
      return {
        activeName: 'second',
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

  ul {
    list-style-type: none;
    padding: 0;
    background: none;
    padding-top: 10px;
  }

  li {
    display: inline-block;
    margin: 0 5px;
    border-radius: 5px;
  }

  .tabs {
    background-color: #f6f6f6;
    font-size: 14px;
    border-radius: 5px;
  }

  .tabs >>> .el-row {
    margin: 0 0 20px 0 !important;
  }

  .el-row :last-child {
    margin-bottom: 0;
    padding-left: 0;
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

  .el-menu-demo li {
    color: #80bd01;
    padding: 0 10px;
  }

  .el-menu-item:focus, .el-menu-item:hover {
    background: none;
  }

  .tabs >>> .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: none;
    color: #fff;
    background-color: #80bd01;
  }

  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }

  .el-menu--horizontal > .el-menu-item {
    height: 40px;
    line-height: 40px;
  }

  .bg-div {
    height: 60px;
  }
</style>
