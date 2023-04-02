// Crear una conexión WebSocket
const socket = new WebSocket('ws://mural.uv.es/osbares/');

// Función para enviar un mensaje
function sendMessage() {
	const messageInput = document.getElementById('message');
	const message = messageInput.value;
	socket.send(message);
	messageInput.value = '';
}

// Función para agregar un mensaje al chat
function addMessage(message) {
	const messagesDiv = document.getElementById('messages');
	const messageElement = document.createElement('div');
	messageElement.textContent = message;
	messagesDiv.appendChild(messageElement);
}

// Escuchar mensajes entrantes
socket.addEventListener('message', event => {
	const message = event.data;
	addMessage(message);
});

