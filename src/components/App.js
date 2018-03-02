import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import '../styles/main.scss';
import Games from './Games';
// === COMPONENTS ===
import Home from './Home';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/games" component={Games} />
    </div>
  </BrowserRouter>
);

export default hot(module)(App);
