import React from 'react';
import openSocket from 'socket.io-client';

export default class Remote extends React.Component {
  componentDidMount() {
    const socket = openSocket('http://localhost:5000');
    socket.emit('submit', 'A');
    console.log('Sent A');
  }

  render() {
    return (
      <div className="Remote">
        <div>
          <button>A</button>
          <button>B</button>
          <button>C</button>
          <button>D</button>
          <button>E</button>
        </div>
      </div>
    );
  }
}
