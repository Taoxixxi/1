<template>
  <div>
    <h1>Vuex购物车demo</h1>
    <product></product>
    <shopcart></shopcart>
    <amount></amount>
  </div>
</template>

<script>
  import product from '../components/product'
  import shopcart from '../components/shopcart'
  import amount from '../components/amount'
  export default {
    name: "vuexdemo",
    components: {
      product,
      shopcart,
      amount,
    }
  }
</script>

<style scoped>

</style>
