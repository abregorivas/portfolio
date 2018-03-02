const webpack = require('webpack');
const path = require('path');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env = {}) => {
  const inProduction = env.production === true;
  const platform = env.platform;

  return {
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:9000', // <- enables websockect connection
      'webpack/hot/only-dev-server', // <-hmr in browser
      './index.js'
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[hash].js',
      publicPath: '/'
    },
    context: path.resolve(__dirname, 'src'),
    devtool: inProduction ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',
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
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          use: 'eslint-loader',
          exclude: /(node_modules|bower_components)/
        },
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.s[ac]ss$/,
          use: ['css-hot-loader'].concat(
            ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                { loader: 'css-loader', options: { importLoaders: 2 } },
                { loader: 'postcss-loader', options: { sourceMap: true } },
                { loader: 'sass-loader', options: { sourceMap: true } }
              ],
              publicPath: '/dist'
            })
          )
        },
        {
          test: /\.(png|svg|jpe?g|gif|svg|ttf|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[name].[hash].[ext]',
                outputPath: 'images/',
                publicPath: '/'
              }
            },
            { loader: 'image-webpack-loader' }
          ]
        }
      ]
    },
    resolve: {
      alias: { components: path.resolve(__dirname, 'src/components') },
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new CleanWebpackPlugin(['dist/*.*'], { root: __dirname, verbose: true, dry: false }),
      new ExtractTextPlugin({
        filename: inProduction ? '[name],[hash].css' : '[name].css',
        disable: false,
        allChunks: true
      }),
      new HtmlWebpackPlugin({ template: 'index.html' }),
      new webpack.HotModuleReplacementPlugin(), // <-generates update chucks hmt
      new webpack.NamedModulesPlugin(),
      new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(inProduction),
        PLATFORM: JSON.stringify(platform)
      })
    ]
  };
};
