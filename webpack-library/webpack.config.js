var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers1123.js', // 打出的文件名
    library: 'webpackNumbers223', // 在环境中的名字
    libraryTarget: 'amd' // 打出的包所支持的环境
  },
  externals: {
    lodash: { // key表示的是本地代码里import xx from 'lodash'中的lodash value表示的是代码所在环境里的模块，也就是将引入模块的方式根据配置替换成指定环境下的引入和模块名
      commonjs: 'lodash',
      amd: 'lodash',
      root: '_',
      commonjs2: 'lodash'
    }
  },
  mode:'development'
};