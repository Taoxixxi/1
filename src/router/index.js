import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Header from '@/components/header'
import interlocution from '@/pages/interlocution'
import clientTest from '@/pages/clientTest'
import detail from '@/pages/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path: 'interlocution',
          name: 'interlocution',
          component: interlocution,
        },
        {
          path: '/clientTest',
          name: 'clientTest',
          component: clientTest
        }
      ]
    },
    {
      path: '/header',
      name: 'header',
      component: Header
    },
    {
      path: '/interlocution/detail',
      name: 'detail',
      component: detail
    }

  ]
})
