import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Remote from 'components/Remote';
import Session from 'components/Instructor/Course/Session';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Remote} />
        <Route exact path="/instructors/wade/cs225/sessions/" component={Session} />
      </BrowserRouter>
    );
  }
}
