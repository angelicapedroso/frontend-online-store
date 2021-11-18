import React, { Component } from 'react';
import { Router, Switch } from 'react-router-dom';
// import Cart from '../../pages/Cart';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Router exact path="/" component={ Cart } />
          <Router exact path="/Page1" component={ Page1 } />
        </Switch>
      </div>
    );
  }
}

export default Routes;
