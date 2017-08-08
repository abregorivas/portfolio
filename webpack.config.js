const webpack = require('webpack')
const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const glob = require('glob')
const PurifyCSSPlugin = require('purifycss-webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const inProduction = false

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash].js'
  },
  context: __dirname,
  devtool:
    process.env.NODE_ENV === 'production'
      ? 'cheap-module-source-map'
      : 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        }))
      },
      {
        test: /\.(png|svg|jpe?g|gif|svg|ttf|woff|woff2)$/,
        loaders: [{
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]'
          }
        },
          'img-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(['dist/*.*'], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: true }),
    new PurifyCSSPlugin({
      paths: glob.sync(path.join(__dirname, 'src/*.html')),
      minimize: inProduction
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        minimize: inProduction,
        postcss: [
          autoprefixer()
        ]
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(inProduction)
    })
  ]
}
