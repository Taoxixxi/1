<template>
  <div class="tabs">
    <el-row :gutter="20">
      <el-col :span="12" :offset="0">
        <div class="grid-content bg-purple bg-div">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">
              <router-link :to="{path:'/interlocution',query:{tab:'all'}}">
                全部
              </router-link>
            </el-menu-item>
            <el-menu-item index="good">
              <router-link :to="{path:'/interlocution',query:{tab:'good'}}">
                精华
              </router-link>
            </el-menu-item>
            <el-menu-item index="share">
              <router-link :to="{path:'/interlocution',query:{tab:'share'}}">
                分享
              </router-link>
            </el-menu-item>
            <el-menu-item index="ask">
              <router-link :to="{path:'/interlocution',query:{tab:'ask'}}">
                问答
              </router-link>
            </el-menu-item>
            <el-menu-item index="job">
              <router-link :to="{path:'/interlocution',query:{tab:'job'}}">
                招聘
              </router-link>
            </el-menu-item>
            <el-menu-item index="6">
              <router-link to="/clientTest">
                客户端测试
              </router-link>
            </el-menu-item>
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
        console.log(key,keyPath);
      }
    }
  }
</script>

<style scoped>

  ul {
    list-style-type: none;
    padding: 0;
    background: none;
    padding-top: 20px;
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
    padding: 0 15px;
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
    height: 25px;
    line-height: 25px;
  }

  .bg-div {
    height: 60px;
  }
</style>
