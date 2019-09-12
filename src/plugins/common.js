/*
  desc: 时间过滤器
  @params timespan Number 时间戳
  @params content Array 所需时间节点集合 如：['year', 'month' , 'day' ,'hour','min','second']
  @params symbol String 分隔符号 如：'-'、'/'
*/
export const toLocaleTimeStrng = (timespan,symbol) => {
    let date = new Date(timespan);
    let retDate = '';
    let month = date.getMonth() > 8 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
    let day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`

    if(!symbol) {
       retDate = `${date.getFullYear()}年${month}月${day}日`;
    }
    else {
        retDate =`${date.getFullYear()}${symbol}${month}${symbol}${day}`;
    }

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    // retDate += ' ' + hours + ':' + minutes + ':' + seconds;
    return retDate;
}