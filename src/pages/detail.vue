<template>
  <div class="detail">
    <p>详情页</p>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "detail",
    created: function () {
        let _this = this;
        axios.get('https://cnodejs.org/api/v1/topic/'+_this.$route.query.id)
          .then(function (response) {
            console.log(response.data.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    },
  }
</script>

<style scoped>

</style>
