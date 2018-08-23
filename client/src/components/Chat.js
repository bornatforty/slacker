import React, { Component } from 'react'
import '../styles/App.css'
import '../styles/Chat.css'
import {connect} from 'react-redux'
import {sendForm1, getChats1} from '../actions/ChatActions'
import {Link} from 'react-router-dom'
import {withAuth} from './Authentication'
import EmojiPicker from 'emoji-picker-react'


class Chat extends Component {
	state = {
		text: ''
	}

  componentDidMount() {
    getChats1()
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

  toggleEmoji = (e) => {
    this.setState({
      renderEmoji: !this.state.renderEmoji
    })
  }
  getEmoji = (code, data) => {
    var output = `:${data.name}:`
    this.setState({
      message: this.state.message +' '+ output,
      renderEmoji: false
    })
  }

  logout = () => {
      this.props.signout()
   }
	
  render () {
    return (
     		 <div className="chatContainer">
     		 	<div className="sideBar">
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
     		 	<div className= "roomContainer">
     		 	{this.props.messages.map((message, i) => (
     		 		<div id="room" key={"message" + i}>
     		 			<span className="timestamp">{message.timestamp}</span>
     		 			<span className="chatstuff"><img id="avatar" src={message.image}/> {message.username}:</span> <span className="messagestuff">{message.message}</span>
     		 		</div>
     		 		))}
     		 	</div>
      			<form id="form" onSubmit={this.handleSubmit}>
            <button type="button" id="emoji" onClick={this.toggleEmoji}><i className="fa fa-user"></i></button>
      				<input name="text" id="text" value={this.state.text} onChange={this.handleChange} type="text" placeholder="compose message" />
      				<button id="button" type="submit">Send</button>
              <div>
                {this.state.renderEmoji ? <EmojiPicker onEmojiClick={this.getEmoji}/> : ''}
              </div>
      			</form>
	         </div>
    )
  }
}

function mapStateToProps(appstate) {
	return {
		messages: appstate.chatReducer.messages1, //with multiple reducers you should reference the specific one
	   username: appstate.chatReducer.username,
     timestamp: appstate.chatReducer.timestamp,
     image: appstate.chatReducer.image
  }
}

export default withAuth(connect(mapStateToProps)(Chat))