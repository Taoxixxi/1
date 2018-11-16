<template>
  <div>
    <h2>商品信息</h2>
    <table>
      <thead>
      <tr>
        <th>id</th>
        <th>名称</th>
        <th>价格</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(shop,index) in shop_list">
        <td>{{shop.id}}</td>
        <td>{{shop.name}}</td>
        <td>{{shop.price}}</td>
        <td>
          <button @click="addCart(shop)">添加至购物车</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: "details",
    data(){
      return{
        //商品列表
      }
    },
    methods:{
    },
    computed: {
      ...mapGetters(['shop_list'])
    }
  }
</script>

<style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }

  tr {
    height: 40px;
  }

  table td,  table th {
    padding: .75rem;
    vertical-align: top;
    border: 1px solid #e9ecef;
  }
  button{
    background-color: #66b1ff;
    color: #fff;
    border: 1px solid #fff;
    width: 100px;
    height: 35px;
    border-radius: 5px;
  }
</style>
