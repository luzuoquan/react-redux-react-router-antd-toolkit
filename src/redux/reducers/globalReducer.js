/**
 * globalReducer
 */

import * as types from '../action/global-mutation-types'


const initialState = {
	globalInfoList: []
}

const mutations = {
	[types.FETCH_GLOBAL_INFOMATION](state, payload) {
		return Object.assign({},state, payload.data)
	}
}

export default function globalReducer(state = initialState, action) {
	if(!mutations[action.type]) return state;
	return {...state, ...mutations[action.type](state, action)}
}
