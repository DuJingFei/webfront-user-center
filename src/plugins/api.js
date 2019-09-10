import Vue from 'vue'
const API_URL = {
    //获取用户列表
    USERS: '/api/users',

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