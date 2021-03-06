var path = require('path')
var webpack = require('webpack')
console.log(process.env.NODE_ENV)
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
                loader: ['vue-test-loader', 'vue-loader']
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
                loader: ['vue-html-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.tx$/,
                use: ['test-loader'],
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue'
        }
    },
    resolveLoader: {
        alias: {
            'test-loader': path.join(__dirname, './loader/test-loader'),
            'vue-test-loader': path.join(__dirname, './loader/vue-test-loader'),
        },
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        inline: false

    },
    devtool: '#eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
    ]
}

