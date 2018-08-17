import React, { Component } from 'react'
import {signin} from '../actions/ChatActions'

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
   		<div>
   			<form onSubmit={this.handleSubmit}>
   				<input type="text" value={this.state.name} onChange={this.handleChange} name="name" placeholder="Enter your name" />
   				<button type="submit">Submit</button>
   			</form>
   		</div>
     
   )
 }
}

export default Name