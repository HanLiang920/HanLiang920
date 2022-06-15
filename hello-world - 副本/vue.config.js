const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:'./',
  transpileDependencies: false,
  productionSourceMap:false,
  css:{
    extract:false
  }
})
