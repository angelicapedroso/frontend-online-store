import React, { Component } from 'react';

class CartPage extends Component {
  constructor(props) {
    super(props);
    const { state: { products } } = props.location;
    this.state = {
      cardProduct: products,
    };
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
      </div>
    );
  }
}

export default CartPage;
