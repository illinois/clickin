import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Remote from 'components/Remote';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Remote} />
      </BrowserRouter>
    );
  }
}
