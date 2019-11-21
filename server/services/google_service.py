from flask import Flask
from flask_dance.contrib.google import make_google_blueprint, google
from google.oauth2 import id_token
from google.auth.transport import requests

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret'

google_blueprint = make_google_blueprint(client_id = '', client_secret='', hosted_domain='http://clicc.in')

app.register_blueprint(google_blueprint, url_prefix='/google_auth')

@app.route('/auth')
def twitter_login():
    if not google.authorized:
        return redirect(url_for('google.login'))
    account_info = google.get('')

    if account_info.ok:
        return account_info

if __name__ == '__main__':
    app.run(debug=True)

# vim: tabstop=8 expandtab shiftwidth=4 softtabstop=4
