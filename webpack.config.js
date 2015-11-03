var path = require('path');
var src = path.resolve(__dirname, 'src')

module.exports = {
    // NOTE: absolute path is important for live reload
    context: src,
    entry: "./app.js",
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
};
