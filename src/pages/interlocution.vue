<template>
  <div>
    <div v-for="(item,index) in topicsList">
      <img class="userimg" :src="item.author.avatar_url"/>
      <span class="count-data">{{item.reply_count}}/{{item.visit_count}}</span>
      <el-tag v-if="item.top === true">置顶</el-tag>
      <el-tag v-else-if="item.top === false">精华</el-tag>
      <span class="item-title">{{item.title}}</span>
      <span>{{item.last_reply_at|formatDate}}</span>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "interlocution",
    data() {
      return {
        topicsList: []
      }
    },
    created: function () {
      let _this = this;
      axios.get('https://cnodejs.org/api/v1/topics', {
        params: {
          tab: "good",
          page: 1,
          limit: 20
        }
      })
        .then(function (response) {
          _this.topicsList = response.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    methods: {
    }
  }
</script>

<style scoped>
  * {
    font-size: 1rem;
    background-color: #fff;
  }

  .userimg {
    width: 30px;
  }

  .item-title {
    display: inline-block;
    width: 80%;
    text-align: left;
    vertical-align: bottom;
  }

  .el-tag {
    background-color: #80bd01;
    padding: 0 3px;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    color: #fff;
  }
  .count-data{
    width:70px;
    font-size: 12px;
  }
</style>
