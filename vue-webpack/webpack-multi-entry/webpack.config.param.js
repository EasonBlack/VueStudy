var path = require('path');

console.log('xxxxxxxxxxxxxxxxxxx');
console.log(process.env.entry);

let entryMap = {
    "index1": {index1: "./index1.js"},
    "index2": {index2: "./index2.js"}
}
let currentEntry = entryMap[process.env.entry.trim()];

module.exports = {
    entry: currentEntry,
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