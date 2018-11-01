var path = require('path');
module.exports = {
    entry: {
        "index1": "./index1.js",
        "index2": "./index2.js"
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[name]-bundle.js',
        publicPath: '/build/',
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        inline: false
    }
}