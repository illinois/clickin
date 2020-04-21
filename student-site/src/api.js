import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:5000');

export function subscribeToQuestions(callback) {
  socket.emit('student-join');
  socket.on('question', question => callback(question));
}

export function answerQuestion(ans) {
  socket.emit('answer', ans);
}
