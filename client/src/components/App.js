import React, { Component } from 'react'
import '../styles/App.css'
import {connect} from 'react-redux'
import {sendForm} from '../actions/ChatActions'


class App extends Component {
	state = {
		text: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		sendForm(this.state.text)
	}
	
  render () {
    return (
     		 <div className="chatContainer">
     		 	<div className= "roomContainer">
     		 	{this.props.messages.map(message => (
     		 		<div>
     		 			{message.message}
     		 		</div>
     		 		))}
     		 		</div>
      			<form onSubmit={this.handleSubmit}>
      				<input type="text" onChange={this.handleChange} id="text" placeholder="compose message" />
      				<button type="submit">Send</button>
      			</form>
	         </div>
    )
  }
}

function mapStateToProps(appstate) {
	return {
		messages: appstate.messages
	}
}

export default connect(mapStateToProps)(App)
