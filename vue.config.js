
module.exports = {
  lintOnSave: false,

  devServer: {
    port: 8066,
    host: '127.0.0.1',
    https: false,

    proxy: {
      '/api': {
          target: 'http://localhost:6741/',
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
    },
  },
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  },
}
