import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:5000');

export function subscribeToQuestions(callback) {
  socket.emit('join');
  socket.on('question', question => callback(question));
  console.log('Subscribed to questions.');
}

// TODO: Remove. For demonstration only!
export function generateQuestion() {
  socket.emit('generate');
}

export function answerQuestion(ans) {
  socket.emit('answer', ans);
}
