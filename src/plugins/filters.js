import Vue from 'vue'
import { toLocaleTimeStrng } from './common.js'



Vue.prototype.host = 'https://vip.kingdee.com'
Vue.prototype.toLocaleTimeStrng = toLocaleTimeStrng;

Vue.filter('cut', function(value, max) {
    if (!value) return '';
    max = parseInt(max, 10);
    if (!max) {
        if (value.match('[图片]')) {
            return value + (' …');
        } else {
            return value;
        }

    }
    if (value.length <= max) return value;
    value = value.substr(0, max);
    return value + (' …');
});