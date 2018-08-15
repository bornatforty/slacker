import io from 'socket.io-client'
import store from './store'

const socket=io.connect('http://10.68.0.110:3001')

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
