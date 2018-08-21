import React, { Component } from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import store from '../actions/store'
import '../styles/App.css'
import 'font-awesome/css/font-awesome.min.css'
import Chat from './Chat'
import Chat2 from './Chat2'
import Chat3 from './Chat3'
import Name from './Name'

class App extends Component {
 render() {
   return (
    	<Provider store={store}>
    		<Router>
    			<div id="container">
    				<Route exact path='/' component={Name} />
    				<Route path='/chat' component={Chat} />
                    <Route path='/chat2' component={Chat2} />
                    <Route path='/chat3' component={Chat3} />
    			</div>
    		</Router>
    	</Provider> 
   )
 }
}

export default App

