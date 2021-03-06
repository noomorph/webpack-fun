var path = require('path');
var src = path.resolve(__dirname, 'src')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var PRODUCTION = process.env.PRODUCTION;

module.exports = {
    // NOTE: absolute path is important for live reload
    context: src,
    entry: "./other.js",
    output: {
        path: './dist',
        filename: '[name].js'
    },
    resolve: {
        root: src,
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            include: src,
        }, {
            test: /\.css$/,
            loader: PRODUCTION ? ExtractTextPlugin.extract('style-loader', 'css') : 'style!css',
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(src, 'index.html'),
            inject: 'body',
        })
    ].concat(PRODUCTION ? [
        new ExtractTextPlugin("main.css")
    ] : []),
};
