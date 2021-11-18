import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from '../pages/Cart';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Cart } />
        </Switch>
      </div>
    );
  }
}

export default Routes;
