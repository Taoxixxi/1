<template>
  <div class="hello">
    <Header></Header>
    <div class="content">
      <Tabs></Tabs>
    </div>

  </div>

</template>

<script>
  import Header from '../components/header'
  import Tabs from '../components/tabs'

  export default {
    name: 'HelloWorld',
    components:{
      Header,
      Tabs
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    },
    methods: {
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
  .hello{
    background-color: #e0e0e0;
  }
  .content{
    width: 73%;
    margin: 0 auto;
    padding-top: 20px;
  }
</style>
