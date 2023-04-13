import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class DespesaCard extends React.Component {
  render() {
    const { description, value, method, tag, currency, ask, exchangeRates } = this.props;
    const moeda = exchangeRates[currency].name;
    const valorConvertido = value * ask;
    return (
        <tr>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{Number(value).toFixed(2)}</td>
          <td>{moeda}</td>
          <td>{Number(ask).toFixed(2)}</td>
          <td>{Number(valorConvertido).toFixed(2)}</td>
          <td>Real</td>
          <td><button type="button">Editar/excluir</button></td>
        </tr>
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
  exchangeRates: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DespesaCard;
