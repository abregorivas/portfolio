import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import '../styles/main.scss';

import Nav from './Nav';
import Home from './Home';

const App = () => (
  <div>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default hot(module)(App);
