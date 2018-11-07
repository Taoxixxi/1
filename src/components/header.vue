<template>
  <div class="header">
      <div class="leftL">
        <img class="logo-img" src="../assets/cnodejs_light.svg">
        <el-input v-model="input" class="search-input" prefix-icon="el-icon-search"></el-input>
      </div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">新手入门</el-menu-item>
        <el-menu-item index="3">API</el-menu-item>
        <el-menu-item index="4">关于</el-menu-item>
        <el-menu-item index="5">注册</el-menu-item>
        <el-menu-item index="6">登录</el-menu-item>
      </el-menu>
  </div>

</template>

<script>
  export default {
    name: "header",
    data() {
      return {
        input: '',
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
  .logo-img {
    width: 115px;
    height: 50px;
    margin-right: 10px;
  }

  .header {
    background-color: #464646;
  }

  .search-input {
    border-color: #c0c4cc;
    width: 206px;
    line-height: 45px;
    border-radius: 26px;
    margin: 5px 0;
  }

  .header >>> .el-input__inner {
    border-radius: 25px;
    line-height: 26px;
    height: 26px;
  }

  .header >>> .el-tabs__item {
    color: #fff;
  }

  .header >>> .el-input__icon {
    line-height: 26px;
  }

  .el-tab-pane {
    color: #fff;
  }

  .header >>> .el-tabs__active-bar {
    display: none;
  }

  .header >>> .el-menu.el-menu--horizontal {
    border: none;
    display: inline-block;
    background: none;
    color: #ccc;
  }

  .header >>> .el-menu-item:hover {
    background: none;
    color: #fff;
    height: 50px;
  }

  .header >>> .el-menu--horizontal > .el-menu-item.is-active {
    border: none;
    color: #409EFF;
  }

  .header >>> .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus {
    background: none;
  }

  .header >>> .el-menu--horizontal .el-menu-item:not(.is-disabled):focus {
    color: cornflowerblue;
  }

  .leftL {
    display: inline-flex;
    vertical-align: super;
    justify-content: flex-start;
    width: 50%;
  }
</style>
