import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from '../pages/Cart';
import CartPage from '../pages/CartPage';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Cart } />
          <Route exact path="/CartPage" component={ CartPage } />
        </Switch>
      </div>
    );
  }
}

export default Routes;
