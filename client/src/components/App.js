import React, { Component } from 'react'
import {Authentication, AuthRoute} from './Authentication'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import '../styles/App.css'
import 'font-awesome/css/font-awesome.min.css'
import Chat from './Chat'
import Chat2 from './Chat2'
import Chat3 from './Chat3'
import Login from './Login'
import Register from './Register'
import store from '../actions/store'
import {Provider} from 'react-redux'

const App = props => (
    <Provider store={store}>
    <Router>
        <Authentication
            redirectURL='/login'
            defaultRedirect='/'>
            <div id="container">
                    <Route exact path='/' render={() =>(<Redirect to='/login' />)} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <Route path='/chat1' component={Chat} />
                    <Route path='/chat2' component={Chat2} />
                    <Route path='/chat3' component={Chat3} />
             </div>
        </Authentication>
    </Router>
    </Provider>
 )
export default App

