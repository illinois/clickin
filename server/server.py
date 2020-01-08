from flask import Flask
from flask_socketio import SocketIO

from instructor import Instructor
from student import Student

app = Flask(__name__)
app.secret_key = 'SECRET'
socketio = SocketIO(app, cors_allowed_origins='*')

if __name__ == '__main__':
  socketio.on_namespace(Instructor('/instructor'))
  socketio.on_namespace(Student('/student'))
  socketio.run(app)
