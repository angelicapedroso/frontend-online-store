import React, { Component } from 'react';
import ProductList from './ProductList';
import { Link } from 'react-router-dom';

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
        <div>
          <button type="button">
            <Link to="/CartPage" data-testid="shopping-cart-button" />
          </button>
        </div>
        ;
      </>
    );
  }
}

export default Cart;
