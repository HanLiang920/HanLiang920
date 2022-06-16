const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave:false,
  publicPath:'./',
  transpileDependencies: false,
  productionSourceMap:false,
  css:{
    extract:false
  }
})
