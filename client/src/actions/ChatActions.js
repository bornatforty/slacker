import io from 'socket.io-client'
import store from './store'

const socket=io.connect('http://192.168.1.6:3001')

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
