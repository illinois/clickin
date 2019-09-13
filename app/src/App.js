import React from 'react';
import logo from './logo.svg';
import './App.css';

function Auth() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 class="text-center">🌽click</h1>
        <h2 class="text-center subheader">Open Source Attendance Tool.</h2>
                <div class="login-methods">
                    <a class="btn btn-success w-100" href="/pl" role="button">
                      <span class="font-weight-bold">Developer by-pass</span>
                    </a>
                    <br/>
                    <a class="btn btn-illinois w-100 position-relative" href="/pl/shibcallback" role="button">
                      <img src="/images/illinois_logo.svg" class="social-icon"/>
                      <span class="font-weight-bold">Sign in with Illinois</span>
                    </a>
                    <br/>
                    <a class="btn btn-primary w-100 position-relative" href="/pl/oauth2login" role="button">
                      <img src="/images/google_logo.svg" class="social-icon"/>
                      <span class="font-weight-bold">Sign in with Google</span>
                    </a>
                    <br/>
                    <a class="btn btn-dark w-100 position-relative" href="/pl/azure_login" role="button">
                      <img src="/images/ms_logo.svg" class="social-icon"/>
                      <span class="font-weight-bold">Sign in with Microsoft</span>
                    </a>
                    <br/>
                </div>
      </header>
    </div>
  );
}

export default Auth;
