<template>
  <div>
    <div v-for="(item,index) in topicsList" class="cell">
      <img class="userimg" :src="item.author.avatar_url"/>
      <span class="count-data">{{item.reply_count}}/{{item.visit_count}}</span>
      <el-tag v-if="item.top === true">置顶</el-tag>
      <el-tag v-else-if="item.top === false">精华</el-tag>
      <span class="item-title">{{item.title}}</span>
      <span class="time">{{item.last_reply_at|formatDate}}</span>
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
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
  }
  .cell{
    padding: 10px 0 10px 10px;
    border-bottom: 1px solid #f0f0f0;
  }
  .userimg {
    width: 30px;
    height: 30px;
    border-radius: 3px;
  }

  .item-title {
    display: inline-block;
    width: 70%;
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
    display: inline-block;
  }
  .time{
    font-size: 12px;
  }
</style>
