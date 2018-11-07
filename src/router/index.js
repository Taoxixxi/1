import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Header from '@/components/header'
import interlocution from '@/pages/interlocution'
import clientTest from '@/pages/clientTest'
import all from '@/pages/all'
import share from '@/pages/share'
import quintessence from '@/pages/quintessence'
import recruit from '@/pages/recruit'
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
          path: '/all',
          name: 'all',
          component: all
        },
        {
          path: 'interlocution',
          name: 'interlocution',
          component: interlocution
        },
        {
          path: 'share',
          name: 'share',
          component: share
        },
        {
          path: 'quintessence',
          name: 'quintessence',
          component: quintessence
        },
        {
          path: '/recruit',
          name: 'recruit',
          component: recruit
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
      path: '/detail',
      name: 'detail',
      component: detail
    }

  ]
})
