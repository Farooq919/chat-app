
basically speaking few things are happening here 

1. we check from the backend if the frontend is connected to socket
2. if it is then we wait for the frontend to post data to backend
3. if there is data going to backend we check from which event the data is coming
   then we emit the data to all the connected clients


first create a server

import express from express
import http from http
import path from path
import {Server} from socket.io


we need http access for socket.io so instead of listening app we listen to http server

server = http.createServer(app)

we connect socket.io to server

io = new Server(server)

Backend:

io.on('connection', (socket) => { // this checks if front end is connected if yes then sends the socket/client as parameter

})

io.on('connection', (socket) =>{

    socket.on('user-msg',(message)=>{// listen for event name user-msg and the coming value of message is passed in the callback function

    })
})

io.on('connection',(socket) =>{

    socket.on('user-defined',(message)=>{

        io.emit('msg',message) // event name msg value message : sent to all connected clients
    })

})

server.listen(5000,()=>{
    console.log('listening on port 3000)
})

----------------------------------------------------------------
FrontEnd:

const script = document.createElement('script') 1.0
script.src = '/socket.io/socket.io.js' 1.1
document.head.appendChild(script) 1.2

script.onload = () =>{ 1.3.1

    const socket = io()  import socket
    

    const send = document.getElementById("sendBtn")
    const input = document.getElementById("message-input")

    send.addEventListener('click', () => {
        const message  = input.value
        socket.emit('user-message',message);  send msg to backend
    });

    this the basic working of socket you can increase the functionality as much as you like

} 1.3.2

[ 1.0 , 1.1 , 1.2 , 1.3.1 , 1.3.2 ]

all this done to prevent writing src of socket.io in html file insted writing it inside the js file

eg 

html file
<html>
--------------------------------your code--------------------------------

<script src="socket.io.js"><script>
<script>-----------------------front end code----------------------------</script>
</html>










