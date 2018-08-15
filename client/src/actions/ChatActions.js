import io from 'socket.io-client'
import store from './store'

const socket=io.connect('http://localhost:3000')

socket.on('message room', function(data) {
	store.dispatch({
		type: 'MESSAGE',
		payload: data
	})
})

export function sendForm(message) {
	socket.emit('message room', {
		message: message
	})
}
