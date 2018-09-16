// Karma configuration
// Generated on Thu Jan 19 2017 13:52:57 GMT+0800 (China Standard Time)
var webpackConfig = require('./webpack.config.js');
delete webpackConfig.entry


module.exports = function(config) {
  config.set({
    webpack: webpackConfig,
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      './src/App.test.js'
    ],
    preprocessors: {
        './src/App.test.js': ['webpack']
    },
    colors: true,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: false,
    plugins: [
       
        require('karma-chrome-launcher'),
        require('karma-webpack'),
        require('karma-jasmine')
    ]
  })
}
