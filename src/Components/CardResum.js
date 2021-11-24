// Requisito 5 - Criação do Card
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardResum extends React.Component {
  render() {
    const { product: { title, thumbnail, price, id } } = this.props;
    return (
      <Link
        data-testid="product-detail-link"
        to={ { pathname: `/productDetails/${id}` } }
      >
        <div data-testid="product">
          <h3>{title}</h3>
          <img src={ thumbnail } alt={ title } />
          <p>{price}</p>
        </div>
      </Link>
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
};

export default CardResum;
