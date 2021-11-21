import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import ProductList from './ProductList';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then((product) => {
      this.setState({
        categories: product,
      });
    });
  }
  render() {
    const { categories } = this.state;
    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <div>
          {categories.map((category) => (
            <section key={ category.id }>
              <Link to={ `/${category.id}` } data-testid="category" />
            </section>
          ))}
        </div>
        <ProductList />
        <button type="button">
          <Link to="/CartPage" data-testid="shopping-cart-button" />
        </button>
      </div>
    );
  }
}

export default Cart;
