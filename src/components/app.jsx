import React, { Component } from 'react'
import { store, history } from '../redux/store'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { withRouter} from 'react-router'

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
  				<ConnectedRouter history={history}>
  					<div>123</div>
  				</ConnectedRouter>
  			</Provider>
		)
	}
}