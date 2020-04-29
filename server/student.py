from flask import session
from flask_socketio import Namespace, join_room, emit

class Student(Namespace):
  def on_join(self, code):
    session['code'] = code
    join_room(code)
    print(f'Student joined {code}!')

  def on_answer(self, answer):
    print(answer)
    emit('answer', answer, namespace='/instructor', room=session['code'])
