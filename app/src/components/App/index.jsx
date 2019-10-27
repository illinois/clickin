import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Remote from 'components/Remote';
import Student from 'components/Student';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Remote} />
        <Route exact path="/student" component={Student} />
      </BrowserRouter>
    );
  }
}
