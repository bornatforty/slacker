function runsocket(io) {

  io.on('connection', socket => {
  	socket.join('room')
    console.log('connected')

    socket.on('message room', function(data) {
    	io.to('room').emit('message room', data)
    })
  })
  
}

export default runsocket