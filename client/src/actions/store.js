// put store stuff here
import {createStore, combineReducers} from 'redux'
import authReducer from '../reducers/authReducer'
import chatReducer from '../reducers/ChatReducers'

const rootReducer = combineReducers({
	authReducer,
	chatReducer
})

const store = createStore(rootReducer)

export default store