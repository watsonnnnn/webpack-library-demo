var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

console.log(require.resolve('./src/index.js')) 
console.log(process.env.webpack_SERVE)
//文件绝对路径。和path.resolve不同 path是专门解析文件路径 这个会按require的方式，
module.exports = {
  entry: {
    index: './src/index.js',
    globalJ: './src/global.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   // _ : 'lodash' 
    //   // We can also use the ProvidePlugin to expose a single
    //   // export of a module by configuring it with an "array path" (e.g.[module, child, ...children ? ]).So
    //   // let 's imagine we only wanted to provide the join method from lodash wherever it's
    //   // invoked: 
    //   join: ['lodash', 'join'] // 数组 ['lodash', 'join'] 多个就在对象里面写多个
    // })
    new CleanWebpackPlugin([path.join(__dirname, './dist')]),
    new HtmlWebpackPlugin({
      title: 'shimming'
    })
  ],
  module: {
    rules: [{
      test: require.resolve('./src/index.js'),
      use: ['imports-loader?this=>{q:123}'] //改文件中this
    },{
      test: require.resolve('./src/global.js'),
      use: ['exports-loader?globalF,globalO,globalV'] // 兼容 使用全局变量定义 而没有使用exports导出的变量
    }]
  },
  mode: 'development'
};