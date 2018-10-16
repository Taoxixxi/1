<template>
  <div>
    全部
  </div>
</template>

<script>
  import api from '../fetch/api'
  import axios from 'axios'

  export default {
    name: "all",
    methods: {
    },
    mounted: function () {
      axios.get('https://cnodejs.org/api/v1/topics', {
        params: {
          tab: "good",
          page: 1,
          limit: 20
        }
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
</script>

<style scoped>

</style>
