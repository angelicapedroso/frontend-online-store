import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromId } from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    const { match: { params: { id } } } = this.props;
    const prodId = id;
    console.log(prodId);
    getProductsFromId(prodId).then((item) => {
      this.setState({ product: item });
    });
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <h2 data-testid="product-detail-name">{product.title}</h2>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>{`R$ ${product.price}`}</p>
        <p>{product.category_id}</p>
        <p>{product.site_id}</p>
        <Link
          to={ { pathname: '/CartPage' } }
        >
          <input
            type="button"
            value="carrinho"
          />
        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default ProductDetails;
