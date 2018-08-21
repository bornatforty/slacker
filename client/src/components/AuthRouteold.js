import React, { Component } from 'react'
import {Route, Redirect} from 'react-router-dom'

class AuthRoute extends Component {
 render() {
   const redirectURL = '/login'

   if(this.props.isAuthenticated) {
   	return	<Route {...this.props} />
   }else {
	return  <Redirect to={redirectURL} />
   }
 }
}

export default AuthRoute