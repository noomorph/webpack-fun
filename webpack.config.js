var path = require('path');
var src = path.resolve(__dirname, 'src')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // NOTE: absolute path is important for live reload
    context: src,
    entry: "./js/main.js",
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
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(src, 'index.html'),
            inject: 'body',
        })
    ]
};
