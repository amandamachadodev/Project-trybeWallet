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
      <main>
        {expenses.map((item) => (<DespesaCard
          description={ item.description }
          value={ item.value }
          currency={ item.currency }
          method={ item.method }
          key={ item.id }
          tag={ item.tag }
          ask={ item.exchangeRates[item.currency].ask }
        />))}
      </main>
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
