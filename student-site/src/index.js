import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

<<<<<<< HEAD
import Auth from './components/Auth';
import Remote from './components/Remote';
=======
import Remote from './components/Remote';
import Student from './components/Student';
>>>>>>> master

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
