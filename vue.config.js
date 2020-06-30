
const px2rem = require('postcss-px2rem')
const postcss = px2rem({
  remUnit:14
});

module.exports={
  productionSourceMap : false,

  css:{
    loaderOptions:{
      postcss:{
        plugins:[
          postcss
            
        ]
      }
    }
  },

  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'views':'@/views',
        'public':'@/../public'
      }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [
        // path.resolve(__dirname, './src/assets/styles/*.scss')     
      ]
    }
  },

}