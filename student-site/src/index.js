import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Remote from './components/Remote';
import Student from './components/Student';

import './index.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Remote} />
        <Route exact path="/student" component={Student} />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
