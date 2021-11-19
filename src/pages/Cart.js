import React, { Component } from 'react';
import ProductList from './ProductList';

class Cart extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <ProductList />
      </div>
    );
  }
}

export default Cart;
