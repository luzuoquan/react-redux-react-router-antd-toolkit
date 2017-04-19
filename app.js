const Koa = require('koa')
const views = require('koa-views')
const static = require('koa-static')
const Webpack = require('webpack')
const koaWebpack = require('koa-webpack')
const devWebpackConf = require('./build/webpack.dev.conf')
const convert = require('koa-convert')
const historyFallback = require('./lib/index')

const app = new Koa();

const compiler = Webpack(devWebpackConf);

const webpackMiddleware = koaWebpack({
	compiler: compiler,
	dev: {
		hot: true,
		noInfo: true,
		publicPath: '/',
		stats: {
			colors: true
		}
	}
})


app.use(historyFallback())
app.use(webpackMiddleware)
app.listen(3001)