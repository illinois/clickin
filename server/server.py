from flask import Flask
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins='*')

@socketio.on('join')
def join():
  print('Someone new just joined!')

@socketio.on('generate')
def generate_question():
  emit('question', 'What\'s the first letter of Brian\'s name?')

@socketio.on('answer')
def check_answer(ans):
  print(f'Answer: {ans}')
  if ans == 'B':
    print('Correct!')
  else:
    print('Incorrect!')

if __name__ == '__main__':
  socketio.run(app, debug=True, log_output=False)
