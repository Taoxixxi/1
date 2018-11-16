<template>
<div>
  <table>
    <tr>
      <td>总数:0</td>
      <td>总价:0</td>
      <td>
        <button>清空购物车</button>
      </td>
    </tr>
  </table>
</div>
</template>

<script>
    export default {
        name: "amount"
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
    background-color: #f66;
    color: #fff;
    border: 1px solid #fff;
    width: 100px;
    height: 35px;
    border-radius: 5px;
  }
</style>
