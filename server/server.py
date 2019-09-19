from flask import Flask
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def root():
  return 'Hello World'

@socketio.on('connection')
def connect():
  print('A user connected.')

if __name__ == '__main__':
  socketio.run(app, debug=True)
