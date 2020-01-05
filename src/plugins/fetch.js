import Vue from 'vue';
import axios from "axios";
import qs from 'qs'

import { Message, MessageBox } from 'element-ui'
import _ from 'lodash'


// axios 配置
axios.defaults.timeout = 600000
    // axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.common['isAdmin'] = 'true';
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "CSRF-TOKEN";
axios.defaults.xsrfHeaderName = "X-CSRF-TOKEN";

function _handleError(errorCode, errorMessage) {
    switch (errorCode) {
        /* 用户未登录 */
        case 401:
                return Message.warning({
                    message: '您还未登录，即将跳转登录页面',
                    onClose: () => {
                        if (window.location.href.indexOf('localhost') > -1) {
                            window.location.href = '/#/login';
                        } else {
                            window.location.href = '/login';
                        }
                    }
                });
            break;

            //权限不足
        case 403:
            Message.error({
                message: errorMessage
            });
            break;

            //资源不存在
        case 404:
            Message.error({
                message: '资源不存在'
            });
            break;

            //参数格式不正确
        case 409:
            Message.error({
                message: errorMessage
            });
            break;

            // 验证异常
        case 406:
            Message.error({
                message: errorMessage
            });
            break;

        default:
            Message.error({
                message: errorMessage
            });
            break;
    }
}

/* 浏览器端API请求返回值统一处理
 * 服务端渲染只能在asyncData和fetch上做redirect或者使用@nuxtjs/axios的OnResponset
 */

function _buildCapchas(response) {
    var uri = (response.config.method + ":" + _removeQueryParams(response.config.url)).toLowerCase();
    if (response.headers.capcha == '1' || response.headers.capcha == 1) {
        Vue.set(fetch.capchas, uri, true);
    } else {
        Vue.set(fetch.capchas, uri, false);
    }
}

function _removeQueryParams(url) {
    var index = url.indexOf('?')
    if (index >= 0) {
        return url.substr(0, url.indexOf('?'));
    } else {
        return url;
    }
}

function _buildRestApi(url, data) {
    for (let field in data) {
        if (url.includes(`{${field}}`)) {
            url = url.replace(`{${field}}`, data[field])
          //  delete data[field]
        }
    }
    return url
}

function _buildQueryUrl(url, data) {
    if (data['include']) {
        url += url.includes('?') ? '&' : '?';
        url += `include=${data['include']}`
        delete data['include']
    }
    if (data['exclude']) {
        url += url.includes('?') ? '&' : '?';
        url += `exclude=${data['exclude']}`
        delete data['exclude']
    }
    if (data['VerifyCode']) {
        url += url.includes('?') ? '&' : '?';
        url += `VerifyCode=${data['VerifyCode']}`
        delete data['VerifyCode']
    }
    return url
}

const fetch = {
    confirmLoginMark:false,
    //是否需要验证码
    capchas: new Array(),
    /**
     * 服务渲染时请求必须带上context
     */
    get(url, originQueryData, context) {
        let queryData = _.cloneDeep(originQueryData);
        url = _buildRestApi(url, queryData)
        return new Promise((resolve, reject) => {

            /*
            if (queryData && Object.keys(queryData).length > 0) {
                if (!url.includes('?')) {
                    url += '?'
                } else {
                    url += '&'
                }
                url += qs.stringify(queryData, {
                    skipNulls: true
                })
            } */

            axios.get(url)
                .then(res => {
                    resolve(res.data)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    post(url, data, context) {
        /* 由于个别接口需要上传的data是form类型,lodash的深拷贝方法会将该类型的data 转换成[]空数组，因此删去深拷贝 */
        // let data = _.cloneDeep(originData)
        url = _buildRestApi(url, data)
        url = _buildQueryUrl(url, data)
        return new Promise((resolve, reject) => {
            axios.post(url, data, context)
                .then(res => {
                    resolve(res.data)

                })
                .catch((error) => {
                    // reject(error)
                })
        })
    },
    put(url, originData, context) {
        let data = _.cloneDeep(originData)
        url = _buildRestApi(url, data)
        url = _buildQueryUrl(url, data)

        return new Promise((resolve, reject) => {
            axios.put(url, data)
                .then(res => {
                    resolve(res.data)
                })
                .catch((error) => {
                    // reject(error)
                })
        })
    },
    delete(url, originData, context) {
        let data = _.cloneDeep(originData)
        url = _buildRestApi(url, data)
        url = _buildQueryUrl(url, data)

        return new Promise((resolve, reject) => {
            axios.delete(url, { data: data })
                .then(res => {
                    resolve(res.data)
                })
                .catch((error) => {
                    // reject(error)
                })
        })
    },
    upload(url, data, config) {
        return new Promise((resolve, reject) => {
            axios({
                    method: 'post',
                    url: url,
                    data: data,
                    headers: config.headers
                })
                .then(res => {
                    resolve(res.data)
                })
                .catch((error) => {
                    // reject(error)
                })
        })
    }
}

/** 定义ajax 请求 */
Vue.prototype.$fetch = fetch
//Vue.prototype.$axios = axios
//Vue.prototype.Util = util

export const $fetch = fetch
export default fetch