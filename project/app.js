const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server); // Create a new Socket.IO server

const port = process.env.PORT || 3000;

// Serve static files (like HTML, CSS, and JS for the frontend)
app.use(express.static(__dirname + '/public'));

// Socket.IO connection event
io.on('connection', (socket) => {
    console.log('New user connected');

    // Listen for incoming chat messages
    socket.on('chatMessage', (msg) => {
        io.emit('chatMessage', msg); // Broadcast the message to all connected clients
    });

    // When a user disconnects
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
