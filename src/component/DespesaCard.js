import React from 'react';
import PropTypes from 'prop-types';

class DespesaCard extends React.Component {
  render() {
    const { description, value, method, tag, currency, ask } = this.props;
    const valorConvertido = value * ask;
    return (
      <div>
        <p>{description}</p>
        <p>{value}</p>
        <p>{method}</p>
        <p>{tag}</p>
        <p>{currency}</p>
        <p>{ask}</p>
        <p>{valorConvertido}</p>
        <p>Real</p>
        <button type="button">Editar/Excluir</button>
      </div>
    );
  }
}

DespesaCard.propTypes = {
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  ask: PropTypes.string.isRequired,
};

export default DespesaCard;
