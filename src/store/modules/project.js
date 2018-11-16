//初始化数据
const state = {
  //商品列表
  shop_list: [{
    id: 11,
    name: '鱼香肉丝',
    price: 12,
  }, {
    id: 22,
    name: '宫保鸡丁',
    price: 14
  }, {
    id: 34,
    name: '土豆丝',
    price: 10
  }, {
    id: 47,
    name: '米饭',
    price: 2
  }],

  //添加到购物车的商品
  added:[]
}
//getter 抛出去的数据
const getters = {
  //商品列表
  shoplist:state => state.shop_list,
  //购物车的列表
  cartProducts:state=>{
    return state.added.map(({id,num})=>{
      let product = state.shop_list.find(n=>n.id == id)
      // console.info('product',product)
      return {
        ...product,
        num
      }
    })
  },
  //计算总价
  totalPrice:(state,getters)=>{
    let total = 0;
    getters.cartProducts.forEach(n=>{
      total += n.price * n.num
    })
    return total;
  },
  //计算总数量
  totalNum:(state,getters)=>{
    let total = 0;
    getters.cartProducts.forEach(n=>{
      total += n.num
    })
    return total;
  },

}

export default {
  state,
  mutations,
  actions,
  getters,
};
