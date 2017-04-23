/**
 * store类
 */
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import reducers from '../reducers'


const history = createHistory()

const historyMiddleware = routerMiddleware(history)

const createStoreWithMiddleware = applyMiddleware(historyMiddleware, thunk)(createStore)

const store = createStoreWithMiddleware(
	combineReducers({
		...reducers,
		router: routerReducer
	}),
	window.devToolsExtension && window.devToolsExtension()
)

export {
	store,
	history
}