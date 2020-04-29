from flask import Flask
from flask_socketio import SocketIO

from instructor import Instructor
from student import Student

app = Flask(__name__)
app.secret_key = 'SECRET'
socketio = SocketIO(app, cors_allowed_origins='*')

socketio.on_namespace(Instructor('/instructor'))
socketio.on_namespace(Student('/student'))

@app.route('/')
def hello_world():
  return 'Hello, World!'

if __name__ == '__main__':
  print('Server running at localhost:5000')
  socketio.run(app)
