// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/public.css'
import http from '@/http'//vue请求拦截


Vue.prototype.$axios = axios//引用axios
Vue.config.productionTip = false//去除开发环境警告
Vue.use(ElementUI)//添加ui插件
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
