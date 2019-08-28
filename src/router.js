import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Login from './views/login/'
import Main from './views/home/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      component: () => import('./views/404')
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{
        path: '',
        component: Main// 默认二级组建

      }, {
        path: 'comment', // 评论列表
        component: () => import('./views/comment')// 按需加载
      }, {
        path: 'material', // 素材列表
        component: () => import('./views/material')// 按需加载写法
      }, {
        path: 'articles', // 内容列表
        component: () => import('./views/articles')// 按需加载写法
      }, {
        path: 'publish', // 发表文章
        component: () => import('./views/publish')
      }, {
        path: '/home/publish/:articleId', // 编辑文章 动态路由
        component: () => import('./views/publish')// 按需加载写法
      }, {
        path: 'account', // 账户信息
        component: () => import('./views/account')
      }
        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (about.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // }
      ]
    }
  ]
})
