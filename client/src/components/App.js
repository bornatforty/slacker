import React, { Component } from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import store from '../actions/store'
import '../styles/App.css'
import Chat from './Chat'
import Name from './Name'

class App extends Component {
 render() {
   return (
    	<Provider store={store}>
    		<Router>
    			<div>
    				<Route exact path='/' component={Name} />
    				<Route path='/chat' component={Chat} />
    			</div>
    		</Router>
    	</Provider> 
   )
 }
}

export default App

