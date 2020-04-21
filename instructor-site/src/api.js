import io from 'socket.io-client';

const server = 'ws://localhost:5000/instructor';
const socket = io.connect(server, { transports: ['websocket'] });

export function joinClass(callback) {
  socket.emit('join', code => callback(code));
}

export function startQuestion() {
  socket.emit('start');
}

export function listenForAnswers(callback) {
  socket.on('answer', answer => callback(answer));
}

export function stopQuestion() {
  socket.emit('stop');
}
