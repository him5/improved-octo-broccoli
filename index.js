const socket = require("socket.io-client")("http://windows93.net:8081");
const io = require('socket.io-client');
 
const sock = io("http://www.windows93.net:8081", {
  path: '/socket.io',
  transportOptions: {
    polling: {
      extraHeaders: {
        "Origin": "http://www.windows93.net",
        "Referer": "http://www.windows93.net/trollbox/index.php"
      }
    }
  }
})
 
sock.on('connect', function(){
    sock.emit("user joined", "BotTemplate [..help]", "white");
})
 
sock.on('message', function(data){
    if(data.msg.startsWith('..template')){
       sock.emit('message', 'template')
    }
})
sock.on('message', function(data){
    if(data.msg.startsWith('..help')){
       sock.emit('message', 'Here are the commands: ..template test')
    }
})
