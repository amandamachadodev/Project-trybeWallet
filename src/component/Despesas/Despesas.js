import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import DespesaCard from './DespesaCard';
import { deleteExpenses } from '../../actions';
import './styles.css';

class Despesas extends React.Component {
  constructor() {
    super();
    this.state = {
      removeExpenses: [],
      expensesUpdated: '',
    };
  }

  handleClick = ({target}) => {
    const {deleteEx} = this.props;
    deleteEx(+target.parentNode.id);
    console.log('5');
    // const {removeExpenses} = this.state;
    // this.setState({ removeExpenses: [...removeExpenses, +target.parentNode.id]}, () => {
    //   const {removeExpenses} = this.state;
    //   const {expenses} = this.props;
    //   // const remove = expenses.filter((element) => element.id !== removeExpenses);
    //   console.log(removeExpenses)
    // })

  }

  render() {
    const { expenses } = this.props;
    return (
      <div className="Table">
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
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          { expenses.map((item) => (
            <tr key={ item.id } id={item.id}>
              <td>{item.description}</td>
              <td>{item.tag}</td>
              <td>{item.method}</td>
              <td>{Number(item.value).toFixed(2)}</td>
              <td>{item.exchangeRates[item.currency].name}</td>
              <td>{Number(item.exchangeRates[item.currency].ask).toFixed(2)}</td>
              <td>{Number(item.exchangeRates[item.currency].ask).toFixed(2) * Number(item.value)}</td>
              <td>Real</td>
              <td id={item.id}><button type="button" onClick={ this.handleClick }>Excluir</button></td>
            </tr>))}
        </tbody>
      </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteEx: (id) => dispatch(deleteExpenses(id)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Despesas.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  sendExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Despesas);
