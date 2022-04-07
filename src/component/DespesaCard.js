import React from 'react';
import PropTypes from 'prop-types';

class DespesaCard extends React.Component {
  render() {
    const { description, value, method, tag, currency, ask } = this.props;
    const valorConvertido = value * ask;
    return (
      <tr>
        <th>{description}</th>
        <th>{value}</th>
        <th>{method}</th>
        <th>{tag}</th>
        <th>{currency}</th>
        <th>{ask}</th>
        <th>{valorConvertido}</th>
        <th>Real</th>
        <th><button type="button">Editar/excluir</button></th>
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
};

export default DespesaCard;
