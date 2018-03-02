const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const PurifyCSSPlugin = require('purifycss-webpack');
const glob = require('glob');

module.exports = merge(common, {
  entry: [
    'webpack-dev-server/client?http://localhost:9000', // <- enables websockect connection
    'webpack/hot/only-dev-server', // <-hmr in browser
    './index.js'
  ],
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/',
    historyApiFallback: true,
    compress: true,
    port: 9000,
    open: true,
    hot: true,
    inline: true
  },
  resolve: {
    alias: { components: path.resolve(__dirname, 'src/components') },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // <-generates update chucks hmt
    new webpack.NamedModulesPlugin()
  ]
});
