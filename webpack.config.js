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
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash].js'
  },
  externals: {
    jquery: 'jQuery'
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
        use: [ {
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        },
        {
          loader: 'sass-loader',
          options: {
            includePaths: [
              path.resolve(__dirname, './node_modules/foundation-sites/scss')]
          }
        }]
      },
      {
        test: /\.(png|svg|jpe?g|gif|svg|ttf|woff|woff2)$/,
        loaders: [{
          loader: 'url-loader',
          options: {
            name: 'images/[name].[ext]',
            limit: 40000
          }
        },
          'image-webpack-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(['dist/*.*'], {
      root: __dirname,
      verbose: true,
      dry: false,
      exclude: ['index.html']
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
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      src: 'src',
      applicationStyles: 'src/styles/main.scss'
    },
    extensions: ['.js', '.jsx']
  }
}
