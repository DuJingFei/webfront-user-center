import Vue from 'vue'
import { toLocaleTimeStrng } from './common.js'



Vue.prototype.host = 'https://vip.kingdee.com'
Vue.prototype.toLocaleTimeStrng = toLocaleTimeStrng;

Vue.prototype.dateSimpleVersion = function(date , symbal = '-') {
    date = new Date(date);
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    let seconds = date.getSeconds();
    
    month = (month >= 1 && month <= 9) ? `0${month}`:month;
    day = (day >= 0 && day <= 9) ? `0${day}`:day;
    hour = (hour >= 0 && hour <= 9) ? `0${hour}`:hour;
    min = (min >= 0 && min <= 9) ? `0${min}`:min;

    return `${date.getFullYear()}-${month}-${day} ${hour}:${min}:${seconds}` 
}

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


Vue.prototype.getFileType = function(path) {
  if ( !path || typeof path != 'string') return
  if (path.indexOf('docx') != -1 || path.indexOf('doc') != -1) {
    return 'icon-word'
  }
  if (path.indexOf('lsx') != -1 || path.indexOf('xlsx') != -1) {
    return 'icon-excel'
  }
  if (path.indexOf('pdf') != -1) {
    return 'icon-pdf'
  }
  return 'icon-file'
}