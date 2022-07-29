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
    model: 'src/pages/model/main.js',
    test: 'src/pages/test/main.js',
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          isCustomElement: (tag) => ['a-scene', 'a-sky','a-entity', 'a-cylinder', 'a-camera','a-marker','a-plane'].includes(tag)
        };
        return options;
      });
    config.plugin('define').tap(args => {
      args[0]['process.env'].version = new Date().getTime()
      return args
    });
  }
})
