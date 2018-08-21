// put store stuff here
import {createStore, combineReducers} from 'redux'
import chatReducer from '../reducers/ChatReducers'

const rootReducer = combineReducers({
	chatReducer
})

const store = createStore(rootReducer)

export default store