from flask import Flask
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def root():
  return 'Hello World'

@socketio.on('connect')
def connect():
  print('Client connected.')

@socketio.on('disconnect')
def disconnect():
  print('Client disconnected.')

if __name__ == '__main__':
  app.run(debug=True)
