import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'

Vue.use(Router)
const routes =  [
  {
    path: '/',
    name: 'index',
    component: Index,
    needLogin: true
  },
  {
    path: '/productlist',
    name: 'product-list',
    component: () => import(/* webpackChunkName: "about" */ './views/ProductList.vue')
  },
  {
    path: '/product/:id',
    name: 'product-detail',
    component: () => import(/* webpackChunkName: "about" */ './views/product/index.vue'),
    meta: { title: 'HYA-product', keyword: 'HYA-product', description: 'HYA-product' },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    meta: { title: 'HYA-about', keyword: 'HYA-about', description: 'HYA-about' },
  },

  {
    path: '/login',
    name: 'login-index',
    component: () => import(/* webpackChunkName: "about" */ './views/Management/Login.vue'),
    meta: { title: 'HYA-login', keyword: 'HYA-login', description: 'HYA-about' }
  },

  {
    path: '/management',
    name: 'management-index',
    component: () => import(/* webpackChunkName: "about" */ './views/Management/index.vue'),
    needLogin: true
  },
  {
    path: '/management/banners',
    name: 'banners-index',
    component: () => import(/* webpackChunkName: "about" */ './views/Management/banner/index.vue'),
    needLogin: true
  },
  {
    path: '/management/banner/add',
    name: 'banner-add',
    component: () => import(/* webpackChunkName: "about" */ './views/Management/banner/add.vue'),
    needLogin: true
  },
  {
    path: '/management/banner/:id',
    name: 'banner-add',
    component: () => import(/* webpackChunkName: "about" */ './views/Management/banner/add.vue'),
    needLogin: true
  },

  {
    path: '/management/product/index',
    name: 'banner-index',
    component: () => import(/* webpackChunkName: "about" */ './views/Management/product/index.vue'),
    needLogin: true
  },

  // 添加产品
  {
    path: '/management/product/add',
    name: 'banner-add',
    component: () => import(/* webpackChunkName: "about" */ './views/Management/product/add.vue'),
    needLogin: true
  },

  // 编辑产品详情
  {
    path: '/management/product/:id',
    name: 'product-editor',
    component: () => import(/* webpackChunkName: "about" */ './views/Management/product/add.vue'),
    needLogin: true
  },

  
  // 产品编辑
  {
    path: '/management/editor/:id',
    name: 'banner-add',
    component: () => import(/* webpackChunkName: "about" */ './views/Management/product/add.vue'),
    needLogin: true
  },

  {
    path: '/management/type',
    name: 'type-index',
    component: () => import(/* webpackChunkName: "about" */ './views/Management/type/index.vue'),
    needLogin: true
  },
  {
    path: '/management/type/add',
    name: 'type-add',
    component: () => import(/* webpackChunkName: "about" */ './views/Management/type/add.vue'),
    needLogin: true
  },
  {
    path: '/management/type/:id',
    name: 'type-add',
    component: () => import(/* webpackChunkName: "about" */ './views/Management/type/add.vue'),
    needLogin: true
  },
]


const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

router.beforeEach((to, from, next) => { // 跳转前
  if (isLoginJudge(to)) {
    
  }
  console.log(router)
  console.log('path', to)
  next() // next 必须执行，才能跳转
})

const isLoginJudge = (routerItem) => {
  if (router.options && router.options.routes && router.options.routes.length > 0) {
    let result = router.options.routes.some(item => 
      item.name  === routerItem.name && item.needLogin
    ) 
    
    if (result && (!document.cookie || !document.cookie.split('=')[0])) {
       return 0
    }
    return 1
  }
  
}

export default router
