const initialState = {
	messages1: [],
	messages2: [],
	messages3: [],
	username: '',
	isAuthenticated: false
} //keep all messages distinct from each other so none appear in the wrong rooms

export default function(state = initialState, action) {
	switch(action.type) {
		case 'MESSAGE1':
			return {...state, messages1:[action.payload, ...state.messages1]}
		case 'MESSAGE2':
			return {...state, messages2:[action.payload, ...state.messages2]}
		case 'MESSAGE3':
			return {...state, messages3:[action.payload, ...state.messages3]} //each chat room has its own switch for messages to keep them separate
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