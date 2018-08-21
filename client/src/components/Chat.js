import React, { Component, Fragment } from 'react'
import '../styles/App.css'
import '../styles/Chat.css'
import {connect} from 'react-redux'
import {sendForm1} from '../actions/ChatActions'
import {Link} from 'react-router-dom'


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
		sendForm1(this.state.text)
		this.setState({
			text: ''
		})
	}
	
  render () {
    return (
     		 <div className="chatContainer">
     		 	<div className="sideBar">
     		 		<div className="activeUsers">
     		 		</div>
     		 		<div className="activeRooms">
     		 			<Link to='/Chat1' className="room1">Room 1</Link>
     		 			<Link to='/Chat2' className="room2">Room 2</Link>
     		 			<Link to='/Chat3' className="room3">Room 3</Link>
     		 			
     		 		</div>
     		 	</div>
     		 	<div className= "roomContainer">
     		 	{this.props.messages.map((message, i) => (
     		 		<div id="room" key={"message" + i}>
     		 			<span className="timestamp">{message.timestamp}</span>
     		 			<span className="chatstuff">{message.image} {message.name}:</span> <span className="messagestuff">{message.message}</span>
     		 		</div>
     		 		))}
     		 	</div>
      			<form id="form" onSubmit={this.handleSubmit}>
      				<input name="text" id="text" value={this.state.text} onChange={this.handleChange} type="text" placeholder="compose message" />
      				<button id="button" type="submit">Send</button>
      			</form>
	         </div>
    )
  }
}

function mapStateToProps(appstate) {
	return {
		messages: appstate.chatReducer.messages1 //with multiple reducers you should reference the specific one
	}
}

export default connect(mapStateToProps)(Chat)