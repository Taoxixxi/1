<template>
  <div class="hello">
    <div>
      <img class="logo-img" src="../assets/cnodejs_light.svg">
    </div>
    <el-input v-model="input" class="search-input" prefix-icon="el-icon-search"></el-input>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="首页" name="first">首页</el-tab-pane>
      <el-tab-pane label="新手入门" name="second">新手入门</el-tab-pane>
      <el-tab-pane label="API" name="third">API</el-tab-pane>
      <el-tab-pane label="关于" name="fourth">关于</el-tab-pane>
      <el-tab-pane label="注册" name="fifth">注册</el-tab-pane>
      <el-tab-pane label="登录" name="sixth">登录</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        input: '',
        activeName: 'second'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .logo-img {
    width: 35%;
  }

  .hello {
    background-color: #464646;
  }

  .search-input {
    border-color: #c0c4cc;
    width: 206px;
    border-radius: 26px;
    line-height: 26px;
  }

  .hello >>> .el-input__inner {
    border-radius: 25px;
    line-height: 26px;
  }

  .hello >>> .el-tabs__item {
    color: #fff;
  }
  .hello >>> .el-input__icon{
    line-height: 26px;
  }

  .el-tab-pane {
    color: #fff;
  }
</style>
