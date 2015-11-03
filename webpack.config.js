var path = require('path');
var webpack = require('webpack');

module.exports = {
    // NOTE: absolute path is important for live reload
    context: path.resolve(__dirname, 'src'),
    entry: "./app.js",
    output: {
        path: './dist',
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
        }],
    },
};
