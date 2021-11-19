import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cart extends Component {
  render() {
    return (
      <>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
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
