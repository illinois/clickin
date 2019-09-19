import React from 'react';
import openSocket from 'socket.io-client';

export default class Remote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    const socket = openSocket('http://localhost:5000');
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
