import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartPage extends Component {
  constructor(props) {
    super(props);
    // const { state: { products } } = props.location;
    // console.log(products);
    const { location: { state: { products } } } = this.props;
    this.state = {
      cardProduct: products,
    };
    console.log(products);
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
                  <p key={ product.id }>
                    <h2>{ product.title }</h2>
                    <img src={ product.thumbnail } alt={ product.title } />
                    <p>{ product.price }</p>
                  </p>
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
    state: PropTypes.string,
    products: PropTypes.string,
  }).isRequired,
};

// props.location.state;

export default CartPage;
