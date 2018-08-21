import io from 'socket.io-client'
import store from './store'
import axios from 'axios'


const socket=io.connect('http://10.68.0.114:3001')

socket.on('message room1', function(data) {
	store.dispatch({
		type: 'MESSAGE1',
		payload: data
	})
})

export function sendForm1(message) {
	const timestamp = new Date().toLocaleDateString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true})
	socket.emit('message room1', {
		message: message,
		timestamp: timestamp
	})
}
socket.on('message room2', function(data) {
	store.dispatch({
		type: 'MESSAGE2',
		payload: data
	})
})

export function sendForm2(message) {
	const timestamp = new Date().toLocaleDateString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true})
	socket.emit('message room2', {
		message: message,
		timestamp: timestamp
	})
}
socket.on('message room3', function(data) {
	store.dispatch({
		type: 'MESSAGE3',
		payload: data
	})
})

export function sendForm3(message) {
	const timestamp = new Date().toLocaleDateString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true})
	socket.emit('message room3', {
		message: message,
		timestamp: timestamp
	})
}

export function signin(name, password) {
	socket.emit('signin', name, password)
}

export function registration(info) {
	axios.post('/api/register', info).then(resp => {

	})

}

