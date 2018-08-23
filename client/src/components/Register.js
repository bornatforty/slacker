import React, { Component } from 'react'
import '../styles/App.css'
import {registration} from '../actions/ChatActions'

class Register extends Component {
	state = {
		username: '',
		password: '',
		image: '',
		email: ''
	}
	
	handleSubmit = (e) => {
		e.preventDefault()
		registration({
			username: this.state.username,
			password: this.state.password,
			image: this.state.image,
			email: this.state.email
		})
		this.props.history.push('/chat1')
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

 render() {
   return (
   	<div className="registerContainer">
   		<form id="register" onSubmit={this.handleSubmit}>
   			<div>
   				<input type="text" value={this.state.username} onChange={this.handleChange} name="username" placeholder="Create a username" />
   			</div>
   			<div>
   				<input type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Create a password" />
   			</div>
   			<div>
   				<input type="text" value={this.state.image} onChange={this.handleChange} name="image" placeholder="Link to your avatar" />
   			</div>
   			<div>
   				<input type="email" value={this.state.email} onChange={this.handleChange} name="email" placeholder="Enter your email address" />
   			</div>
   			<button type="submit" className="registerhere">Register</button>
   		</form>
   	</div>
     
   )
 }
}

export default Register