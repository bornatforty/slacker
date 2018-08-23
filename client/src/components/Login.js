import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import {withAuth} from './Authentication'

class Login extends Component {
	state = {
		username: '',
      password: '',
      redirectToReferrer: false
	}

   componentDidMount() {
      console.log(this.props)
   }

	handleSubmit = (e) => {
		e.preventDefault()
      this.props.signin(this.state.username, this.state.password, () => {
         this.setState({
            redirectToReferrer: true
         })
      })
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

   // login = () => {
   //    this.props.signin(() => {
   //       this.setState({
   //          username: this.state.username,
   //          password: this.state.password,
   //          redirectToReferrer: true
   //       })
   //    })
   // }

 render() {

   const {from} = this.props.location.state || {from: {pathname: this.props.defaultRedirect}}
   const {redirectToReferrer} = this.state

   if (redirectToReferrer) {
      return <Redirect to={from} />
   } else {
      return (
   		<div className="landingContainer">
   			<header>Slack<span className="rotated">er</span></header>
   			<div className="gridContainer">
   				<div className="grid one">
   					<form id="login" onSubmit={this.handleSubmit}>
   						<div>
   							<input type="text" value={this.state.username} onChange={this.handleChange} name="username" placeholder="Enter your name" />
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
}

export default withAuth(Login)