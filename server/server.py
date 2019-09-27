from flask import Flask
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins='*')

@app.route('/')
def root():
  return 'Hello World'

@socketio.on('submit')
def handle_submit(ans):
  print(f'Submitted {ans}')

if __name__ == '__main__':
  socketio.run(app, debug=True)
