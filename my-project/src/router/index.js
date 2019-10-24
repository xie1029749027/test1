import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import sec from '@/page/sec'
import thir from '@/page/thir'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/sec',
      name: 'sec',
      component: sec
    },
    {
      path: '/thir',
      name: 'thir',
      component: thir
    }
  ]
})
