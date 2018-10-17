<template>
  <div class="interlocution">
    <div v-for="(item,index) in topicsList" class="cell">
      <img class="userimg" :src="item.author.avatar_url"/>
      <span class="count-data"><span class="reply-count">{{item.reply_count}}</span>/{{item.visit_count}}</span>
      <el-tag v-if="item.top === true">置顶</el-tag>
      <el-tag v-else-if="item.good === true">精华</el-tag>
      <!--<el-tag v-else-if="item.tab === 'jod'">招聘</el-tag>-->
      <!--<el-tag v-else-if="item.tab ==='ask'">问答</el-tag>-->
      <span class="item-title">
        <router-link :to="{path:'/detail',query:{id:item.id,a:1}}">
          {{item.title}}
        </router-link>
      </span>
      <span class="time">{{item.last_reply_at|formatDate}}</span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "interlocution",
    data() {
      return {
        topicsList: [],
      }
    },
    watch: {
      '$route'(to,from){
        console.log(to.path)
        console.log(from.path)
        let _this = this;
        axios.get('https://cnodejs.org/api/v1/topics', {
          params: {
            tab: _this.$route.params.tab,
            page: 1,
            limit: 40
          }
        })
          .then(function (response) {
            _this.topicsList = response.data.data;
            console.log(response)
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  * {
    font-size: 1rem;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
  }
  .interlocution{
    background-color: #fff;
  }
  .cell{
    padding: 10px 0 10px 10px;
    border-bottom: 1px solid #f0f0f0;
  }
  .cell:hover{
    background-color: #f5f5f5;
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
  .item-title:hover{
    text-decoration: underline;
    cursor: pointer;
  }
  .item-title a{
    color:#333!important;
    text-decoration: none;
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
    color:#b4b4b4;
  }
  .time{
    font-size: 12px;
    min-width: 50px;
    display: inline-block;
    text-align: right;
  }
  .reply-count{
    color:#9e78c0;
    font-size:12px;
  }
</style>
