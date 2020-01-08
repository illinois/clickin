import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Auth from './components/Auth';
import Remote from './components/Remote';

import './index.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Auth} />
        <Route path="/:code" component={Remote} />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
