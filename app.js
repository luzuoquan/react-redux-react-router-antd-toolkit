const Koa = require('koa')
const Webpack = require('webpack')
const koaWebpack = require('koa-webpack')
const devWebpackConf = require('./build/webpack.dev.conf')
const historyFallback = require('koa2-history-api-fallback')

const app = new Koa()

const compiler = Webpack(devWebpackConf)

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