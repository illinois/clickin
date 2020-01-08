from flask import session
from flask_socketio import Namespace
from flask_socketio import join_room, leave_room
from flask_socketio import emit

from code_generator import generate_code

class Instructor(Namespace):
  def on_join(self):
    code = generate_code(4)
    session['code'] = code
    join_room(code)
    print(f'The instructor joined {code}!')
    return code

  def on_start(self):
    print('Started question.')
    emit('start', namespace='/student', room=session['code'])

  def on_stop(self):
    print('Stopped question.')
    emit('stop', namespace='/student', room=session['code'])
