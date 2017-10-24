var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var uuid = require('uuid');
var _version = uuid.v1();

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js',
        chunkFilename:'[id].build.[hash].js'
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
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue',
            '$style': path.resolve(__dirname, '../../style'),
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        inline: false
    },
    //devtool: '#eval-source-map'
    devtool: '#eval'
}

if (process.env.NODE_ENV === 'production') {
    console.log(process.env.NODE_ENV);
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
                warnings: false,
                drop_console: true,
                dead_code: true
            },
            output: {
                comments: false
            }
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new HtmlWebpackPlugin({
            title: 'test',
            version: _version,
            template: 'index_template.ejs',
            filename: '../index.html',
            inject: false
        })
    ])
}
