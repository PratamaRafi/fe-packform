const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8081,
    proxy: {
      '/order': {
        target: 'https://4pt4n6d6-8080.asse.devtunnels.ms',
        changeOrigin: true,
        pathRewrite: {
          '^/order': '/order',
        },
      },
    },
  },
})
