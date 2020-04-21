import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:5000');

export function subscribeToAnswers(callback) {
  socket.emit('instructor-join');
  socket.on('answer', answer => callback(answer));
}

export function askQuestion(question) {
  socket.emit('ask', question);
} 
