import React from 'react';
import openSocket from 'socket.io-client';

export default class Remote extends React.Component {
  componentDidMount() {
    const socket = openSocket('http://localhost:5000');
    this.setState({socket: socket});
 }

  submit(ans) {
    this.state.socket.emit('submit', ans);
  }

  render() {
    return (
      <div className="Remote">
        <div>
          <button onClick={() => this.submit('A')} >A</button>
          <button onClick={() => this.submit('B')} >B</button>
          <button onClick={() => this.submit('C')} >C</button>
          <button onClick={() => this.submit('D')} >D</button>
          <button onClick={() => this.submit('E')} >E</button>
        </div>
      </div>
    );
  }
}
