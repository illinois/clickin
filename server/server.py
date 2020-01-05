from flask import Flask, request
from flask_socketio import SocketIO, emit
from redis import Redis

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins='*')
db = Redis(host='localhost', port=6379, db=0)

@socketio.on('instructor-join')
def instructor_join():
  print('The instructor joined!')
  db.set('instructor', request.sid)

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
  instructor = db.get('instructor').decode('utf-8')
  emit('answer', answer, room=instructor)

if __name__ == '__main__':
  socketio.run(app, debug=True, log_output=False)
