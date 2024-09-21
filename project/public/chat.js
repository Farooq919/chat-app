const socket = io(); // Connect to the Socket.IO server

const chatBox = document.getElementById('chat-box');
const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');

// Send a message to the server when the form is submitted
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    socket.emit('chatMessage', message); // Send message to the server
    messageInput.value = '';
});

// Listen for new messages from the server and display them
socket.on('chatMessage', (msg) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = msg;
    chatBox.appendChild(messageElement);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
});
