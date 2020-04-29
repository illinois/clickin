import io from 'socket.io-client';

// Student Socket.io Endpoints

const student = io.connect('ws://localhost:5000/student');

export function joinClass(code) {
  student.emit('join', code);
}

export function answerQuestion(answer, callback) {
  student.emit('answer', answer, callback);
}

// Instructor Socket.io Endpoints

const instructor = io.connect('ws://localhost:5000/instructor');

export function beginClass(callback) {
  instructor.emit('join', code => callback(code));
}

export function startQuestion() {
  instructor.emit('start');
}

export function listenForAnswers(callback) {
  instructor.on('answer', answer => callback(answer));
}

export function stopQuestion() {
  instructor.emit('stop');
}
