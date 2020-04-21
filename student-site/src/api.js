import io from 'socket.io-client';

const server = 'ws://localhost:5000/student';
const socket = io.connect(server, { transports: ['websocket'] });

export function getCodes() {
  return fetch('/codes')
    .then(res => res.json())
    .then(res => res.codes);
}

export function joinClass(code) {
  socket.emit('join', code);
}

export function answerQuestion(answer, callback) {
  socket.emit('answer', answer, callback);
}
