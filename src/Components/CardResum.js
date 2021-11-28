// Requisito 5 - Criação do Card
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardResum extends React.Component {
  render() {
    const { product: { title, thumbnail, price, id },
      product,
      addProductCart,
    } = this.props;
    return (
      <div>
        <Link
          data-testid="product-detail-link"
          to={ { pathname: `/productDetails/${id}` } }
        >
          <div data-testid="product">
            <h3 data-testid="shopping-cart-product-name">{ title }</h3>
            <img src={ thumbnail } alt={ title } />
            <p>{ price }</p>
          </div>
        </Link>
        <input
          data-testid="product-add-to-cart"
          type="button"
          value="Adicionar ao carrinho"
          onClick={ () => addProductCart(product) }
        />
      </div>
    );
  }
}

CardResum.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
  addProductCart: PropTypes.func.isRequired,
};

export default CardResum;
