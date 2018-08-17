import axios from 'axios'
import jwt from 'jsonwebtoken'

let loginInterceptor = null //login and logout need access thats why its up here

export function login(username, password) {
	axios.post('/api/login', {username, password}).then(resp => {
		const token = res.data.token

		console.log(jwt.decode(token))

		loginInterceptor = axios.interceptors.request.use(config => {
			config.headers['Authorization'] = 'Bearer ' + token
		}) //all future calls will have token attached"
			//interceptor is basically middleware for axios
			store.dispatch({
				type: 'LOGIN_SUCCESS',
				payload: {
					username
				}
			})
		}).catch (err => {
			store.dispatch({
				type: 'LOGIN_FAILURE'
			})
	})
}

export function logout() {
	axios.interceptors.request.eject(loginInterceptor) //ejected and token no longer attached to requests
	store.dispatch({
		type: 'LOGOUT'
	})
}