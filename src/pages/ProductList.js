import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      productsList: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ search: value });
  }

  fetchAPI() {
    const { search } = this.state;
    getProductsFromCategoryAndQuery('', search).then((query) => {
      this.setState({ productsList: query.results });
    });
  }

  render() {
    const { search, productsList } = this.state;
    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          value={ search }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.fetchAPI }
        >
          Buscar
        </button>
        {productsList.map((product) => (
          <div key={ product.id }>
            <Link
              data-testid="product-detail-link"
              to={ { pathname: `/product/${product.id}`, state: { product } } }
            >
              <div data-testid="product">
                <h3>{product.title}</h3>
                <img src={ product.thumbnail } alt={ product.title } />
                <p>{product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default ProductList;
