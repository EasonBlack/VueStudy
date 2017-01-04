var webpack = require('webpack');
var config = require('../../client/build/webpack.dev.config.js');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');


module.exports = function(app){
    var compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath,
        watchOptions: {
            poll: true
        }
    }));
    app.use(webpackHotMiddleware(compiler, { heartbeat: 10 * 1000}));

}


