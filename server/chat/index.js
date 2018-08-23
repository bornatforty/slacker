import conn from '../db/conn'

function runsocket(io) {


  io.on('connection', socket => {
  	socket.on('signin', function(name) {
  		socket.name = name
  	})
  	socket.join('room1')
    socket.join('room2')
    socket.join('room3')
    console.log('connected')

    socket.on('/chat1', function(data) {
      console.log(data)
      const sql = `INSERT INTO chat1 (username, timestamp, message, image) 
                   VALUES (?, ?, ?, ? )`

      conn.query(sql, [data.username, data.timestamp, data.message, data.image], (err, results, fields) => {
        const obj=Object.assign(data, {
          name: socket.name
        })
        io.to('room1').emit('/chat1', obj)
      })
    })


    socket.on('/chat2', function(data) {
      const sql = `INSERT INTO chat2 (username, timestamp, message, image) 
                   VALUES (?, ?, ?, ? )`

      conn.query(sql, [data.username, data.timestamp, data.message, data.image], (err, results, fields) => {
        const obj=Object.assign(data, {
        name: socket.name
      })
      io.to('room2').emit('/chat2', obj)
      })
    })


    socket.on('/chat3', function(data) {
      const sql = `INSERT INTO chat3 (username, timestamp, message, image) 
                   VALUES (?, ?, ?, ? )`

      conn.query(sql, [data.username, data.timestamp, data.message, data.image], (err, results, fields) => {
        const obj=Object.assign(data, {
        name: socket.name
      })
      io.to('room3').emit('/chat3', obj)
      })
    })
  })
}

export default runsocket