from flask import Flask
from flask_socketio import SocketIO
import json

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins='*')

@app.route('/')
def root():
  return 'Hello World'

@socketio.on('submit')
def handle_submit(ans):
  parsed_ans = json.loads(ans)
  email = parsed_ans['email']
  letter = parsed_ans['letter']
  print(f'{email} submitted {letter}')

if __name__ == '__main__':
  socketio.run(app, debug=True)
