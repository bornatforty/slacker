const initialState = {
	username: '',
	isAuthenticated: false
}

export default function (state = initialState, action) {
	switch(action.type) {
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