const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'
	
const env = process.env.NODE_ENV

Object.keys(baseWebpackConfig.entry).forEach(key => {
	baseWebpackConfig.entry[key] = [hotMiddlewareScript].concat(baseWebpackConfig.entry[key])
})


module.exports = merge(baseWebpackConfig, {
	devtool: "cheap-eval-source-map",
	plugins: [
		new webpack.DefinePlugin({
			 'process.env.NODE_ENV': JSON.stringify(env)
		}),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
	    	filename: 'index.html',
	    	template: 'index.html',
	      	inject: true
	    })
	]
})