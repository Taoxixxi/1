<template>
  <div class="detail">
    <Header></Header>
    <div class="content">
    <h3>{{detailInfo.title}}</h3>
      <ul>
        <li>发布于{{detailInfo.last_reply_at|formatDate}}</li>
        <!--<li>作者{{detailInfo.author.loginname}}</li>-->
        <li>{{detailInfo.visit_count}}次浏览</li>
        <li>最后一次编辑是{{detailInfo.create_at|formatDate}}</li>
        <li>来自<span v-if="detailInfo.tab == 'share'">分享</span></li>
      </ul>
      <div class="detailInfo">
        <!--{{detailInfo.content}}-->
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
      console.group('------created创建完毕状态------');
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
    beforeUpdate: function () {
      let _this = this;
      var div = document.createElement('div');
      var aaa = document.getElementsByClassName('detailInfo');
      console.log(div);
      div.innerHTML = _this.detailInfo.content;
      console.log(div.innerHTML)
      var MyComponent = Vue.extend({
        template: '<div>Hello World</div>'
      })
      new MyComponent().$mount('#app')
    },
  }
</script>

<style scoped>
  ul li{
    float: left;
    padding-right: 30px;
  }
</style>
