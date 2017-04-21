import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/components/app'
import './src/assets/css/app.css'

const render = Component => {
	ReactDOM.render(
		<Component />,
		document.querySelector('#J-spa')
	)	
}

render(App)

if(module.hot) {
	module.hot.accept('./src/components/app', () => {
		render(App)
	})
}