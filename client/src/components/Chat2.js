import React, { Component } from 'react'
import '../styles/App.css'
import '../styles/Chat2.css'
import {connect} from 'react-redux'
import {sendForm2, getChats2} from '../actions/ChatActions'
import {Link} from 'react-router-dom'
import {withAuth} from './Authentication'


class Chat2 extends Component {
	state = {
		text: ''
	}

  componentDidMount() {
    getChats2()
  }

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		sendForm2(this.state.text)
		this.setState({
			text: ''
		})
	}

  logout = () => {
      this.props.signout()
   }
	
  render () {
    return (
     		 <div className="chatContainer">
     		 	<div className="sideBar2">
     		 		<div className="activeUsers">
     		 		</div>
     		 		<div className="activeRooms">
     		 			<Link to='/chat1' className="room1">Room 1</Link>
     		 			<Link to='/chat2' className="room2">Room 2</Link>
     		 			<Link to='/chat3' className="room3">Room 3</Link>
     		 		</div>
              <div className="profileContainer">
              <button onClick={this.logout}>Logout</button>
            </div>
     		 	</div>
     		 	<div className= "roomContainer2">
     		 	{this.props.messages.map((message, i) => (
     		 		<div id="room" key={"message" + i}>
     		 			<span className="timestamp2">{message.timestamp}</span>
     		 			<span className="chatstuff2"><img src={message.image} alt={message.username}/> {message.username}:</span> <span className="messagestuff">{message.message}</span>
     		 		</div>
     		 		))}
     		 	</div>
      			<form id="form" onSubmit={this.handleSubmit}>
      				<input name="text" id="text2" value={this.state.text} onChange={this.handleChange} type="text" placeholder="compose message" />
      				<button id="button2" type="submit">Send</button>
      			</form>
	         </div>
    )
  }
}

function mapStateToProps(appstate) {
	return {
		messages: appstate.chatReducer.messages2, //with multiple reducers you should reference the specific one
     username: appstate.chatReducer.username,
     timestamp: appstate.chatReducer.timestamp,
     image: appstate.chatReducer.image
	}
}

export default withAuth(connect(mapStateToProps)(Chat2))