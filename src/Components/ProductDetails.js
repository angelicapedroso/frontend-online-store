// Requisito 9 feito com a ajuda dos alunos Emerson Moreira e Rafael Carvalho da turma 16 tribo A.

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromId } from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
      productCart: [],
    };
    this.getProduct = this.getProduct.bind(this);
    this.addProductCart = this.addProductCart.bind(this);
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

  addProductCart(product) {
    this.setState((prevState) => {
      this.setState({ productCart: [...prevState.productCart, product] });
    });
  }

  render() {
    const { product, productCart } = this.state;
    return (
      <div>
        <h2 data-testid="product-detail-name">{product.title}</h2>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>{`R$ ${product.price}`}</p>
        <p>{product.category_id}</p>
        <p>{product.site_id}</p>
        <Link
          to={ {
            pathname: '/CartPage',
            state: { products: [...productCart] },
          } }
          data-testid="shopping-cart-button"
        >
          <button
            type="button"
          >
            Carrinho de compras
          </button>
        </Link>
        <input
          data-testid="product-detail-add-to-cart"
          type="button"
          value="Adicionar ao carrinho"
          onClick={ () => this.addProductCart(product) }
        />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default ProductDetails;
