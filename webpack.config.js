'use strict';

var webpack           = require('webpack'),
    path              = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    srcPath           = path.join(__dirname, 'client')

module.exports = {
    target: 'web',
    cache: true,
    entry: {
        main: path.join(srcPath, 'app.js'),
    },
    resolve: {
        root: [srcPath, path.join(__dirname, 'bower_components')],
        extensions: ['', '.js', '.css'],
        modulesDirectories: ['node_modules', 'src']
    },
    output: {
        path: path.join(__dirname, 'public/assets'),
        publicPath: '/assets/',
        filename: '[name].js',
        pathInfo: true
    },
    module: {
        loaders: [
            {
                test: /\.tpl\.html$/,
                loader: 'ngtemplate?relativeTo=/client/!html'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'traceur?runtime'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
			{
				test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/font-woff"
			},
			{
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            },
			{
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            },
			{
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: 'client/index.html',
        }),
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.NoErrorsPlugin(),
    ],
    debug: true,
    devtool: 'source-map'
};
