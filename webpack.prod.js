const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const PurifyCSSPlugin = require('purifycss-webpack');
const glob = require('glob');
const autoprefixer = require('autoprefixer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  devtool: 'cheap-module-eval-source-map',
  entry: ['./index.js'],
  plugins: [
    new PurifyCSSPlugin({
      paths: glob.sync(path.join(__dirname, 'src/*.html')),
      minimize: true,
      purifyOptions: {
        whitelist: []
      }
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        minimize: true,
        postcss: [autoprefixer()]
      }
    }),
    // new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true)
    })
  ]
});
