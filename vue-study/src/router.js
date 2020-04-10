import Vue from 'vue' // 引入vue
import Router from './kvue-router' // 引入kvue-router

// 使用自定义router插件
Vue.use(Router)

// 实例化vue对象
const router = new Router({
  mode: 'hash',
  routes: [
    {
      path:'/home',
      title: 'home',
      component: () => import('./components/base/home.vue')
    },
    {
      path:'/list',
      title: 'list',
      component: () => import('./components/base/list.vue')
    },
  ]
})

export default router