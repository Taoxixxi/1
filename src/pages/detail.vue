<template>
  <div class="detail">
    <Header></Header>
    <div class="content">
    <h3>{{detailInfo.title}}</h3>
      <ul>
        <li>发布于{{detailInfo.last_reply_at|formatDate}}</li>
        <li>作者{{detailInfo.author.loginname}}</li>
        <li>{{detailInfo.visit_count}}次浏览</li>
        <li>最后一次编辑是{{detailInfo.create_at|formatDate}}</li>
        <li>来自<span v-if="detailInfo.tab == 'share'">分享</span></li>
      </ul>
      <div>
        {{detailInfo.content}}
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Header from '../components/header'
  import Tabs from '../components/tabs'
  export default {
    name: "detail",
    components:{
      Header,
      Tabs
    },
    data() {
      return {
        detailInfo: [],
      }
    },
    created: function () {
        let _this = this;
        axios.get('https://cnodejs.org/api/v1/topic/'+_this.$route.query.id)
          .then(function (response) {
            _this.detailInfo = response.data.data;
            console.log(response.data.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    },
  }
</script>

<style scoped>
  ul li{
    float: left;
    padding-right: 30px;
  }
</style>
