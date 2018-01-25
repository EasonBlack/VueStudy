var path = require('path')
var webpack = require('webpack')
console.log(process.env)
console.log(process.env.APP_VERSION);
let appVersion = process.env.APP_VERSION || '1';
appVersion = appVersion.trim();

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
                loader: 'json-loader'
            },
            {
                test: /\.html$/,
                loader: 'vue-html-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
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
            'vue$': 'vue/dist/vue'
        }
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
        new webpack.NormalModuleReplacementPlugin(/(.*)config.version(\.*)/, function(resource) {
            resource.request = resource.request.replace(/.version/, `.${appVersion}`);
        })
    ]
}

