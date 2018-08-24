import io from 'socket.io-client'
import store from './store'
import axios from 'axios'
import { api } from '../components/Authentication'


const socket=io.connect('http://localhost:3001')

socket.on('/chat1', function(data) {
	store.dispatch({
		type: 'MESSAGE1',
		payload: data
	})
})

export function getChats1() {
	api.get('/api/chat1').then(data => {
		store.dispatch({
			type: 'GET_CHATS1',
			payload: data
		})
	})
}

export function sendForm1(message, image, username) {
	const timestamp = new Date().toLocaleDateString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true})
	socket.emit('/chat1', {
		message: message,
		username: api.getProfile().username,
		image: api.getProfile().image,
		timestamp: timestamp
	})
}
socket.on('/chat2', function(data) {
	store.dispatch({
		type: 'MESSAGE2',
		payload: data
	})
})

export function getChats2() {
	api.get('/api/chat2').then(data => {
		store.dispatch({
			type: 'GET_CHATS2',
			payload: data
		})
	})
}

export function sendForm2(message, image, username) {
	const timestamp = new Date().toLocaleDateString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true})
	socket.emit('/chat2', {
		message: message,
		username: api.getProfile().username,
		image: api.getProfile().image,
		timestamp: timestamp
	})
}
socket.on('/chat3', function(data) {
	store.dispatch({
		type: 'MESSAGE3',
		payload: data
	})
})

export function getChats3() {
	api.get('/api/chat3').then(data => {
		store.dispatch({
			type: 'GET_CHATS3',
			payload: data
		})
	})
}

export function sendForm3(message, image, username) {
	const timestamp = new Date().toLocaleDateString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true})
	socket.emit('/chat3', {
		message: message,
		username: api.getProfile().username,
		image: api.getProfile().image,
		timestamp: timestamp
	})
}

// export function signin(name, password) {
// 	socket.emit('signin', name, password)
// }

export function registration(info) {
	axios.post('/api/register', info).then(resp => {

	})

}

