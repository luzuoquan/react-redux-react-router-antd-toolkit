const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const env = process.env.NODE_ENV

module.exports = {
	entry: {
		app: './main.js'
	},
	output: {
		path: '/',
		publicPath: '/',
		filename: '[name].[hash].js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css/,
				use: env === 'production' ? ExtractTextPlugin.extract({
        			fallback: 'style-loader',
        			use: 'css-loader',
                	publicPath: '/dist'
     			}) : ['style-loader','css-loader']
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				loader: 'url-loader',
				options: {
					name: path.join('/images/[name].[ext]'),
					limit: 10000
				},
				exclude: /node_modules/
			}
		]
	}
}