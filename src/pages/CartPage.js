import React, { Component } from 'react';
import Cart from './Cart';

class CartPage extends Component {
  render() {
    return (
      <>
        <div>
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        </div>
        <Cart />
      </>
    );
  }
}

export default CartPage;
