from flask import Flask
from flask.ext.cors import CORS

from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def root():
  return 'Hello World'

@socketio.on('submit')
def handle_submit():
  print('Submitted.')

if __name__ == '__main__':
  socketio.run(app, debug=True)
