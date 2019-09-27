import React from 'react';

export default class Auth extends React.Component {
  render() {
    return (
      <div className="Auth">
        <h1>Kaboom</h1>
        <h2>Open Source Attendance Tool</h2>

        <div>
          <a href="/remote"><p>Developer Bypass</p></a>
          <p>Sign in with Illinois</p>
          <p>Sign in with Google</p>
          <p>Sign in with Microsoft</p>
        </div>
      </div>
    );
  }
}
