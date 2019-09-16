import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Auth from 'components/Auth';
import Remote from 'components/Remote';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Auth} />
        <Route exact path="/remote" component={Remote} />
      </BrowserRouter>
    );
  }
}
