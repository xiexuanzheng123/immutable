var path =require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var  ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        hmr: [
            'webpack-hot-middleware/client?reload=true'
        ],
        index: [
            './index.js'
        ]
    },
    output: {
        path: path.join(__dirname,'/build'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    "babel-loader"
                ]
            },{
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },{
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                    'url-loader?limit=10000&name=img/[hash:8].[name].[ext]'
                ]
            },{
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                importLoaders: 1,
                                localIdentName: '[name].[local]',  // [name]__[local]--[hash:base64:5] -> name: module name, local: original name
                                modules: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Post Test',
            filename: 'build/immutable.html',
            template: './index.html',
            inject: 'body',
            hash: true,
            chunks: ['index']
        })
    ]
}