var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        path.resolve(__dirname, '../src/main.js')
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist',
        filename: 'build.js',

    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules'),
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json'
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
            }
        ]
    },
    vue: {
        loaders: {
            scss:  ExtractTextPlugin.extract('css!sass')
        }
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    devtool: '#eval-source-map'
}