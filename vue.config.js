
module.exports = {
  lintOnSave: false,

  devServer: {
    port: 8066,
    host: '127.0.0.1',
    https: false,

    proxy: {
      '/api': {
          target: 'http://172.25.1.243:47778/api',
          changeOrigin: true,
          ws: true,
          xfwd: true,
          dev: true,
          pathRewrite: {
            '^/api': ''
          }
      }
    }
  },

  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: 'N'
    }
  }
}
