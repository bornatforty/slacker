function runsocket(io) {


  io.on('connection', socket => {
  	socket.on('signin', function(name) {
  		socket.name = name
  	})
  	socket.join('room1')
    socket.join('room2')
    socket.join('room3')
    console.log('connected')

    socket.on('message room1', function(data) {
    	const obj=Object.assign(data, {
    		name: socket.name
    	})
    	io.to('room1').emit('message room1', obj)
    })
    socket.on('message room2', function(data) {
      const obj=Object.assign(data, {
        name: socket.name
      })
      io.to('room2').emit('message room2', obj)
    })
    socket.on('message room3', function(data) {
      const obj=Object.assign(data, {
        name: socket.name
      })
      io.to('room3').emit('message room3', obj)
    })
  })
  
}

export default runsocket