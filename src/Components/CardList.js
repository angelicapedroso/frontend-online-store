// Requisito 5 - Mapeando para listar os cards de acordo com a pesquisa
import React from 'react';
import PropTypes from 'prop-types';
import CardResum from './CardResum';

class CardList extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        {product.map((prod) => (
          <CardResum product={ prod } key={ prod.title } />
        ))}
      </div>
    );
  }
}

CardList.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;
