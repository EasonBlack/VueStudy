var path = require('path')
var webpack = require('webpack')

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
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.css/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.html$/,
                loader: 'vue-html-loader'
            },
            {
                test: /\.(png|jpg|gif|svg|woff|eot|woff2|ttf)$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue',
            'bootstrap$': path.resolve(__dirname, '../../node_modules/bootstrap/dist/css/bootstrap.min.css'),
            '$components':  path.resolve(__dirname, './src/common/components'),
            'types$':  path.resolve(__dirname, './src/store/types') 
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        inline: false
    },
    devtool: '#eval-source-map'
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
