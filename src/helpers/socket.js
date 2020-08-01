let io = null;


function sock(server){
    io = require('socket.io')(server )
    return io
}

function getIo(){
    return io
}

module.exports = {sock, getIo}