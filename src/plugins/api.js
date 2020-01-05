import Vue from 'vue'
const API_URL = {

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

    //获取地域信息
    AREAS: "/api/areas",

    //获取UID为XXX用户主页的个人公开信息
    MEMBERS: "/api/users/{id}",

    //文档登录
    THIRD_CODE: "/api/account/openParameter",

    //获取登录用户全部信息
    ME: "/api/account/me",

    //获取用户关注话题
    ME_TAGS: "/api/me/tags",
}

Vue.prototype.$api = API_URL

export default API_URL