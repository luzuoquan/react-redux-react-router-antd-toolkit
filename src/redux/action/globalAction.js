import 'whatwg-fetch'
import * as types from './global-mutation-types'

export function fetchGlobalInfo() {
	return function(dispatch) {
		fetch(`http://cnodejs.org/api/v1/topics`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Token': token
			},
			credentials: 'include',
			credentials: 'same-origin'
		})
		.then(response => {
			if (response.status >= 200 && response.status < 300) {
				return response.json();
			}
		})
		.then(json => {
			dispatch({
				type: types.FETCH_GLOBAL_INFOMATION,
				data: json.data
			})
		})
	}
}