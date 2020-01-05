import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/management',
      name: 'management-index',
      component: () => import(/* webpackChunkName: "about" */ './views/Management/index.vue')
    },
    {
      path: '/management/banners',
      name: 'banners-index',
      component: () => import(/* webpackChunkName: "about" */ './views/Management/banner/index.vue')
    },
    {
      path: '/management/banner/add',
      name: 'banner-add',
      component: () => import(/* webpackChunkName: "about" */ './views/Management/banner/add.vue')
    },
    {
      path: '/management/banner/:id',
      name: 'banner-add',
      component: () => import(/* webpackChunkName: "about" */ './views/Management/banner/add.vue')
    },

    {
      path: '/management/product/index',
      name: 'banner-index',
      component: () => import(/* webpackChunkName: "about" */ './views/Management/product/index.vue')
    },

    // 添加产品
    {
      path: '/management/product/add',
      name: 'banner-add',
      component: () => import(/* webpackChunkName: "about" */ './views/Management/product/add.vue')
    },

    // 编辑产品详情
    {
      path: '/management/product/:id',
      name: 'product-editor',
      component: () => import(/* webpackChunkName: "about" */ './views/Management/product/add.vue')
    },

    
    // 产品编辑
    {
      path: '/management/editor/:id',
      name: 'banner-add',
      component: () => import(/* webpackChunkName: "about" */ './views/Management/product/add.vue')
    },
  ]
})
