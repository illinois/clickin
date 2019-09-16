import React from 'react';

export default class Auth extends React.Component {
  render() {
    return (
      <div className="Auth">
        <h1 class="text-center">Kaboom</h1>
        <h2 class="text-center subheader">Open Source Attendance Tool.</h2>

        <div class="login-methods">
            <a class="btn btn-success w-100" href="/pl" role="button">
              <span class="font-weight-bold">Developer bypass</span>
            </a>
            <br/>
            <a class="btn btn-illinois w-100 position-relative" href="/pl/shibcallback" role="button">
              <span class="font-weight-bold">Sign in with Illinois</span>
            </a>
            <br/>
            <a class="btn btn-primary w-100 position-relative" href="/pl/oauth2login" role="button">
              <span class="font-weight-bold">Sign in with Google</span>
            </a>
            <br/>
            <a class="btn btn-dark w-100 position-relative" href="/pl/azure_login" role="button">
              <span class="font-weight-bold">Sign in with Microsoft</span>
            </a>
          </div>
      </div>
    );
  }
}
