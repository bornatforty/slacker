const initialState = {
	messages: [],
	username: '',
	isAuthenticated: false
}

export default function(state = initialState, action) {
	switch(action.type) {
		case 'MESSAGE':
			return {...state, messages:[action.payload, ...state.messages]}
		case "LOGIN_SUCCESS":
			return {...state, username: action.payload.username, isAuthenticated: true}
		case "LOGIN_FAILURE":
			return {...state, username: '', isAuthenticated: false}
		case "LOGOUT":
			return {...state, username: '', isAuthenticated: false}


		default:
			return state
	}
}