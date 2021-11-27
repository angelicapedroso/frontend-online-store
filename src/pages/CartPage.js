// Requisito 8 feito com ajuda do Brunão - T16A e da Priscila - T16A

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartPage extends Component {
  constructor(props) {
    super(props);
    const { location: { state: { products } } } = this.props;
    this.state = {
      cardProduct: products,
    };
  }

  render() {
    const { cardProduct } = this.state;
    return (

      (
        cardProduct.length <= 0
          ? <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
          : (
            <section>
              {
                cardProduct.map((product) => (
                  <div key={ product.id }>
                    <h2 data-testid="shopping-cart-product-name">{ product.title }</h2>
                    <img src={ product.thumbnail } alt={ product.title } />
                    <p>{ product.price }</p>
                    <span data-testid="shopping-cart-product-quantity">
                      1
                    </span>
                  </div>
                ))
              }
            </section>
          )
      )
    );
  }
}

CartPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
      })),
    }),
  }).isRequired,
};

export default CartPage;
