from flask import Flask, request
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins='*')

instructor = None

@socketio.on('instructor-join')
def instructor_join():
  print('The instructor joined!')
  global instructor
  instructor = request.sid

@socketio.on('student-join')
def student_join():
  print('A student joined!')

@socketio.on('ask')
def ask_question(question):
  print(f'Received question: {question}')
  emit('question', question, broadcast=True)

@socketio.on('answer')
def answer_question(answer):
  print(f'Received answer: {answer}')
  emit('answer', answer, room=instructor)

if __name__ == '__main__':
  socketio.run(app, debug=True)
