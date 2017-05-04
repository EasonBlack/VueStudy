var path = require('path')
var webpack = require('webpack')
console.log(path.resolve(__dirname, "../../assets/icons"));

const projectRoot = path.resolve(__dirname, '../../')
console.log(projectRoot);
console.log(path.resolve(projectRoot, 'node_modules','vue/dist/vue'));
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }, 
      {
          test: /\.(woff|woff2|eot|ttf)(\?.*$|$)/,
          loader: 'url-loader?importLoaders=1&limit=100000'
      },
    ]
  },
  resolve: {
      modules: [
               "node_modules"
      ],
      alias: {
          'vue$': 'vue/dist/vue'
      }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map',
  plugins: [
      new webpack.LoaderOptionsPlugin({
          test: /\.vue$/,
          options: {
              vue: {
                  loaders: {
                      scss: 'style-loader!css-loader!sass-loader'
                  }
              }
          }
      }),
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}
