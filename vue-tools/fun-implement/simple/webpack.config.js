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
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: [{
                    loader:'babel-loader',
                    options: {
                        presets: [
                          ['es2015', { modules: false }]
                        ]
                    }
                }],
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.scss$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
            },
            {
                test: /\.html$/,
                use: 'vue-html-loader'
            },
            {
                test: /\.(png|jpg|gif|svg|ttf|woff|woff2|eot)$/,
                use: [
                    {
                        loader:'url-loader',
                        query: {
                            limit: 10000,
                            name: '[name].[ext]?[hash]'
                        }
                    }
                ],       
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue',
            '$style': path.resolve(__dirname, '../../../style'),
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
