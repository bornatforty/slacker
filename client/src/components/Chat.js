import React, { Component } from 'react'
import '../styles/App.css'
import {connect} from 'react-redux'
import {sendForm} from '../actions/ChatActions'


class Chat extends Component {
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
		this.setState({
			text: ''
		})
	}
	
  render () {
    return (
     		 <div className="chatContainer">
     		 	<div className="sideBar"></div>
     		 	<div className= "roomContainer">
     		 	{this.props.messages.map((message, i) => (
     		 		<div id="room" key={"message" + i}>
     		 			{message.name}: {message.message}
     		 		</div>
     		 		))}
     		 	</div>
      			<form id="form" onSubmit={this.handleSubmit}>
      				<input name="text" id="text" value={this.state.text} onChange={this.handleChange} type="text" placeholder="compose message" />
      				<button type="submit">Send</button>
      			</form>
	         </div>
    )
  }
}

function mapStateToProps(appstate) {
	return {
		messages: appstate.chatReducer.messages
	}
}

export default connect(mapStateToProps)(Chat)