import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency, walletBank } from '../../actions';
import './styles.css';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Cartão de crédito',
      tag: 'Lazer',
      exchangeRates: [],
      expenses: [],
    };
  }

  getApi = async () => {
    const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    return data;
  }

  componentDidMount = async () => {
    const { getCurrency } = this.props;
    getCurrency();
  }

  handleChange = ({ target }) => {
    const { data } = this.props;
    this.setState({ [target.name]: target.value, exchangeRates: data }, () => {
      const { id, value, description, currency, method, tag, exchangeRates } = this.state;
      this.setState({ expenses: { id,
        value,
        description,
        currency,
        method,
        tag,
        exchangeRates,
        valorConvertido: Number(exchangeRates[currency].ask) * Number(value), } });
    });
  }

  addExpense = async () => {
    const exchangeRates = await this.getApi();
    const { sendExpenses } = this.props;
    const { expenses, id } = this.state;
    this.setState({ id: id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates }, () => {
      sendExpenses(expenses);
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div className="Form">
        <form>
          <label htmlFor="value">
            Valor:
            <input
              className="Form-input"
              type="number"
              id="value"
              name="value"
              value={ value }
              data-testid="value-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="currrency">
            Moeda
            <select
              className="Form-select"
              id="currrency"
              data-testid="currency-input"
              name="currency"
              defaultValue={ currency }
              onChange={ this.handleChange }
            >
              {currencies.map((element, index) => (
                <option
                  key={ index }
                  value={ element }
                >
                  {element}
                </option>))}
            </select>
          </label>
          <label htmlFor="method">
            Metodo de pagamento:
            <select
              className="Form-select"
              id="method"
              data-testid="method-input"
              name="method"
              defaultValue={ method }
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Categoria:
            <select
              className="Form-select"
              id="tag"
              data-testid="tag-input"
              name="tag"
              defaultValue={ tag }
              onChange={ this.handleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>

          <label htmlFor="description">
            Descrição:
            <input
              className="Form-input"
              type="text"
              id="description"
              name="description"
              value={ description }
              data-testid="description-input"
              onChange={ this.handleChange }
            />
          </label>
        </form>
        <button className="Form-button" type="button" onClick={ this.addExpense }>Adicionar despesa</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(fetchCurrency()),
  sendExpenses: (expenses) => dispatch(walletBank(expenses)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  data: state.wallet.data,
  expenses: state.wallet.expenses,
});

Form.propTypes = {
  getCurrency: PropTypes.func.isRequired,
  sendExpenses: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  despesas: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
