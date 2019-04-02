module.exports = function(io) {
    io.on('connection', (socket) => {
      console.log('connected*****');
      
      socket.on('new-message', (data) => {
        console.log({data: data});
        io.emit('emit-message', {
          message: data
        });
      });
    });
  }