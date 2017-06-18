const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base.config.js')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(baseConfig, {
    // Point entry to your app's server entry file
    entry: './src/entry_server.js',
    // This allows webpack to handle dynamic imports in a Node-appropriate
    // fashion, and also tells `vue-loader` to emit server-oriented code when
    // compiling Vue components.
    target: 'node',

    devtool: 'source-map',
    output: {
        libraryTarget: 'commonjs2'
    },
    // This is the plugin that turns the entire output of the server build
    // into a single JSON file. The default file name will be
    // `vue-ssr-server-bundle.json`
    plugins: [
        new VueSSRServerPlugin()
    ]
})