const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = merge(baseWebpackConfig, {
	output: {
		path: path.resolve(__dirname, '../dist/'),
		filename: 'static/js/[name].[hash].js',
		chunkFilename: 'static/js/[id].js'
	},
	devtool: 'source-map',
	plugins: [
		new webpack.DefinePlugin({
		    'process.env': {
		    	NODE_ENV: JSON.stringify('production')
		    }
	  	}),
	  	new webpack.optimize.UglifyJsPlugin({
	  	    sourceMap: true,
	  	    compress: {
	  	    	warnings: false
	  	    }
    	}),
    	new ExtractTextPlugin('static/css/[name].[chunkhash].css'),
    	new webpack.optimize.CommonsChunkPlugin({
    		name: 'vendor',
	      	minChunks: function (module, count) {
		        return (
        			module.resource &&
		          	/\.js$/.test(module.resource) &&
		          	module.resource.indexOf(
			            path.join(__dirname, '../node_modules')
		          	) === 0
		        )
		    }
    	}),
    	new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			chunks: ['vendor']
		}),
		new HtmlWebpackPlugin({
	    	filename: 'index.html',
	    	template: 'index.html',
	      	inject: true
	    })
	]
})