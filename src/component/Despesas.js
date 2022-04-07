import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DespesaCard from './DespesaCard';

class Despesas extends React.Component {
  render() {
    // id: 0,
    // value: '',
    // description: '',
    // currency: '',
    // method: '',
    // tag:
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item) => (<DespesaCard
            exchangeRates={ item.exchangeRates }
            description={ item.description }
            value={ item.value }
            currency={ item.currency }
            method={ item.method }
            key={ item.id }
            tag={ item.tag }
            ask={ item.exchangeRates[item.currency].ask }
          />))}
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Despesas.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Despesas);
