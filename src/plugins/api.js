import Vue from 'vue'
const API_URL = {

    // 登录
    LOGIN: '/api/login',

    // 上传资料
    UPLOAD: '/api/upload',
    
    //获取产品列表
    PRODUCT_LIST: '/api/list',

    // 产品详情
    PRODUCT_DETAIL: '/api/product/{id}',

    // 添加产品
    PRODUCT_ADD: '/api/product/add',

    //新建banner
    NEW_BANNER: '/api/banner',
    
    // 获取banner详情
    BANNER_DETAIL: '/api/banner/{id}',

    // 获取banner集
    BANNER_LIST: '/api/bannerlist',

    // 分类(产品/解决方案/案例)
    TYPE_LIST: '/api/typelist',

    TYPE_ADD: '/api/type/add',

    TYPE_UPDATE: '/api/type/{id}',
}

Vue.prototype.$api = API_URL

export default API_URL