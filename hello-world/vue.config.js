const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave:false,
  publicPath:'./',
  transpileDependencies: false,
  productionSourceMap:false,
  css:{
    extract:false
  },
  pages: {
    index: 'src/pages/index/main.js',
    ar: 'src/pages/ar/main.js',
    model: 'src/pages/model/main.js'
  }
})
