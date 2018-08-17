function runsocket(io) {


  io.on('connection', socket => {
  	socket.on('signin', function(name) {
  		socket.name = name
  	})
  	socket.join('room')
    console.log('connected')

    socket.on('message room', function(data) {
    	const obj=Object.assign(data, {
    		name: socket.name
    	})
    	io.to('room').emit('message room', obj)
    })
  })
  
}

export default runsocket