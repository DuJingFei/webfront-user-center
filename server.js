var http = require('http')
var express = require('express')
var history = require('connect-history-api-fallback')
var path= require('path')

//使用history解决线上history模式的路径获取失败bug
app.use(history({
    rewrites: [
        {
          from: /^\/api\/.*$/,
          to: function(context) {
              return context.parsedUrl.path
          }
        },
        {
            from: /^\/courseapi\/.*$/,
            to: function(context) {
                return context.parsedUrl.path
            }
        }
      ]
}));

const proxyEnvPrex = 'proxy_'
let proxy = { }
let proxyConfigKeys = Object.keys(process.env)
    .filter(item => {
        return item.startsWith(proxyEnvPrex)
    })
for (let key of proxyConfigKeys) {
    if (!process.env[key]) continue
    let proxyName = key.replace(proxyEnvPrex, '/').replace(/_/g, '/').replace(/{\w+}/g, '*')
    if (key.match('courseapi')) {
        proxy[proxyName] = {
            target: process.env[key],
            pathRewrite: {
                '^/courseapi': ''
            },
            changeOrigin: true,
            xfwd: true
        }
    } else {
        proxy[proxyName] = {
            target: process.env[key],
            pathRewrite: {
                '^/api': '',
                '^/logapi': '',
            },
            changeOrigin: true,
            xfwd: true
        }
    }
}
let sortedProxy = {}
Object.keys(proxy).sort((l, r) => l.length <= r.length)
    .forEach(x => {
        sortedProxy[x] = proxy[x];
    })
proxy = sortedProxy;

//在app上获取请求，响应内容__diename+'./dist'  src
app.use(express.static(path.join(__dirname,'/dist')));

app.use('/public',express.static('./public'));

app.get('/', function (req, res) {   //通过get方式请求页面，'/'代表请求的是根目录（一般为首页）
    res.sendFile(__dirname + '/dist/index.html');   //send（）方法发送数据到客户端
})

//创建服务并监听
http.createServer(app).listen(8186, function (err) {
    if (!err)
        console.log('listening....')  //当监听成功会执行
}) 
