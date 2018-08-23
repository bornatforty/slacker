import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthService from '../lib/auth'

export const api = new AuthService()

const AuthContext = React.createContext({
	isAuthenticated: false,
	redirectURL: '/login',
	defaultRedirect: '/'
})

export class Authentication extends Component {
	state = {
		isAuthenticated: api.loggedIn()
	}

	static defaultProps = {
		redirectURL: '/login',
		defaultRedirect: '/'
	}

	signin = (username, password, cb) => {
		api.login(username, password).then(data => {
			this.setState({
				isAuthenticated: true
			})
			cb()
		}).catch(err => {
			console.log("Error!", err)
		})
	}

	signout = () => {
		api.logout()
		this.setState({
			isAuthenticated: false
		})
	}

	render() {
		const value = {
			isAuthenticated: this.state.isAuthenticated,
			redirectURL: this.props.redirectURL,
			signin: this.signin,
			signout: this.signout
		}

		return (
			<AuthContext.Provider value={value}>
				{this.props.children}
			</AuthContext.Provider>
		)
	}
}

export const AuthRoute = ({ component: Component, ...rest}) => (
	<AuthContext.Consumer>
		{({isAuthenticated, redirectURL}) => (
			<Route {...rest} render={(props) => (
				isAuthenticated
				? <Component {...props} />
				: <Redirect to={{
					pathname: redirectURL,
					state: {from: props.location}
				}}/>
				)
			}/>
		)}
	</AuthContext.Consumer>
	)

export function withAuth(Component) {
	return props => (
		<AuthContext.Consumer>
			{context => (
				<Component {...context} {...props} />
				)}
		</AuthContext.Consumer>
	)
}


