import React, { Component } from 'react'
import {signin} from '../actions/ChatActions'
import 'font-awesome/css/font-awesome.min.css'

class Name extends Component {
	state = {
		name: ''
	}

	handleSubmit = (e) => {
		signin(this.state.name)
		this.props.history.push('/chat')
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

 render() {
   return (
   		<div className="landingContainer">
   			<header>Slack<span className="rotated">er</span></header>
   			<div className="gridContainer">
   				<div className="grid one">
   					<i className="fa fa-shipping-fast"></i>
   					<p>Its Fast!</p>
   				</div>
   				<div className="grid two">
   					<i className="fa fa-smile-beam"></i>
   					<p>Its Fun!</p>
   				</div>
   				<div className="grid three">
   					<i className="fa fa-dollar-sign"></i>
   					<p>Its Free!</p>
   				</div>
   			</div>
   			<div className="loginContainer">
   				<form onSubmit={this.handleSubmit}>
   					<input type="text" value={this.state.name} onChange={this.handleChange} name="name" placeholder="Enter your name" />
   					<button type="submit">Submit</button>
   				</form>
   			</div>
   		</div>
     
   )
 }
}

export default Name