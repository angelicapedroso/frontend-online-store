import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CartPage from '../pages/CartPage';
import Home from '../pages/Home';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/CartPage" component={ CartPage } />
        </Switch>
      </div>
    );
  }
}

export default Routes;
