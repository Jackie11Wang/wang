import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import Index from '../view/index/index'
import Manage from '../view/manage/index'
import Login from '../view/index/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
        path: '/Manage',
        name: '/Manage',
        component: Manage
    },
    {
        path: '/Login',
        name: '/Login',
        component: Login
    },
    {
        path: '/test',
        name: '/test',
        component: test
    }
  ]
})