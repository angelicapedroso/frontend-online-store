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
      productList: [],
      productCart: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
    this.selectedCategory = this.selectedCategory.bind(this);
    this.addProductCart = this.addProductCart.bind(this);
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
      this.setState({ productList: query.results });
    });
  }

  selectedCategory() {
    this.fetchAPI();
  }

  addProductCart(product) {
    this.setState((prevState) => {
      this.setState({ productCart: [...prevState.productCart, product] });
    });
  }

  render() {
    const { search, product, productList, productCart } = this.state;
    console.log(this);
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
        {/* Requisito 3 */ }
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
        {/* Requisito 4 */ }
        <div>
          { product.map(({ id, name }) => (
            <div key={ id }>
              <label htmlFor={ id } data-testid="category">
                <input
                  type="radio"
                  name="category"
                  id={ id }
                  value={ name }
                  onChange={ this.selectedCategory } // Requisito 6 - Função para chamar a categoria
                />
                { name }
              </label>
            </div>
          )) }
        </div>
        {/* Requisito 5 - Renderizando a lista de cards */ }
        <ProductList product={ productList } addProductCart={ this.addProductCart } />
      </div>
    );
  }
}

export default Home;
