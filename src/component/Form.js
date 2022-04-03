import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency } from '../actions';

class Form extends React.Component {
  componentDidMount = async () => {
    const { getCurrency } = this.props;
    getCurrency();
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="number" id="valor" data-testid="value-input" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" data-testid="currency-input" name="moeda">
            {currencies.map((element, index) => (
              <option
                key={ index }
                value={ element }
              >
                {element}
              </option>))}
          </select>
        </label>
        <label htmlFor="pagamento">
          Metodo de pagamento:
          <select id="pagamento" data-testid="method-input" name="pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="cartao-de-credito">Cartão de crédito</option>
            <option value="cartao-de-debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Categoria:
          <select id="categoria" data-testid="tag-input" name="categoria">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>

        <label htmlFor="descricao">
          Descrição:
          <input type="text" id="descricao" data-testid="description-input" />
        </label>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(fetchCurrency()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  getCurrency: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
