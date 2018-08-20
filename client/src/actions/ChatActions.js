import io from 'socket.io-client'
import store from './store'


const socket=io.connect('http://10.68.0.114:3001')

socket.on('message room', function(data) {
	store.dispatch({
		type: 'MESSAGE',
		payload: data
	})
})

export function sendForm(message) {
	const timestamp = new Date().toLocaleDateString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true})
	socket.emit('message room', {
		message: message,
		timestamp: timestamp
	})
}

export function signin(name) {
	socket.emit('signin', name)
}