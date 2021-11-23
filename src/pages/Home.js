import React from 'react';
import { Link } from 'react-router-dom';
// import CategorieList from '../Components/CategorieList';
import ProductList from '../Components/ProducList';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      product: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
    this.selectedCategory = this.selectedCategory.bind(this);
  }

  componentDidMount() {
    getCategories().then((products) => {
      this.setState({
        product: products,
      });
    });
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ search: value });
  }

  fetchAPI() {
    const { search } = this.state;
    getProductsFromCategoryAndQuery('', search).then((query) => {
      this.setState({ product: query.results });
    });
  }

  selectedCategory() {
    this.fetchAPI();
  }

  render() {
    const { search, product } = this.state;
    return (
      // Requisito 2
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
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
        {/* Requisito 3 */}
        <button type="button">
          <Link to="/CartPage" data-testid="shopping-cart-button" />
        </button>
        {/* Requisito 4 */}
        <div>
          {product.map(({ id, name }) => (
            <div key={ id }>
              <label htmlFor={ id } data-testid="category">
                <input
                  type="radio"
                  name="category"
                  id={ id }
                  value={ name }
                  onChange={ this.selectedCategory } // Requisito 6 - Função para chamar a categoria
                />
                {name}
              </label>
            </div>
          ))}
        </div>
        {/* Requisito 5 - Renderizando a lista de cards */}
        <ProductList product={ product } />
      </div>
    );
  }
}

export default Home;
