import React, { Component } from 'react'
import {signin} from '../actions/ChatActions'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import {withAuth} from './Authentication'

class Login extends Component {
	state = {
		name: '',
      password: '',
      redirectToReferrer: false
	}

	handleSubmit = (e) => {
		signin(this.state.name)
		this.props.history.push('/Chat1')
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

   login = () => {
      this.props.signin(() => {
         this.setState({
            redirectToReferrer: true
         })
      })
   }

   logout = () => {
      this.props.signout()
   }

 render() {
   return (
   		<div className="landingContainer">
   			<header>Slack<span className="rotated">er</span></header>
   			<div className="gridContainer">
   				<div className="grid one">
   					<form id="login" onSubmit={this.handleSubmit}>
   						<div>
   							<input type="text" value={this.state.name} onChange={this.handleChange} name="name" placeholder="Enter your name" />
   						</div>
   						<div>
   							<input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter Password" />
   						</div>
   						<button type="submit">Sign In</button>
   						<div className="registerhere">
   							<Link to="/register">New user? Register here</Link>
   						</div>
	   				</form>
   				</div>
   			</div>
   		</div>
     
   )
 }
}

export default Login