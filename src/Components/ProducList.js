// Requisito 5 - Mapeando para listar os cards de acordo com a pesquisa
import React from 'react';
import PropTypes from 'prop-types';
import CardResum from './CardResum';

class ProductList extends React.Component {
  render() {
    const { product, addProductCart } = this.props;
    if (product.length === 0) {
      return (
        <div>
          Nenhum produto foi encontrado
        </div>
      );
    }
    return (
      <div>
        { product.map((prod, id) => (
          <CardResum
            key={ id }
            product={ prod }
            addProductCart={ addProductCart }
          />
        )) }
      </div>
    );
  }
}

ProductList.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object).isRequired,
  addProductCart: PropTypes.func.isRequired,
};

export default ProductList;
