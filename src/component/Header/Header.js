import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './styles.css'

class Header extends React.Component {
  somaTotal = () => {
    const { expenses } = this.props;
    const arrayValores = expenses.map((e) => Number(e.exchangeRates[e.currency].ask).toFixed(2)
      * Number(e.value).toFixed(2));
    const soma = (expenses.length === 0) || (expenses === undefined)
      ? 0
      : arrayValores.reduce((result, number) => (result + number), 0);
    return soma.toFixed(2);
    
  }

  render() {
    const { email } = this.props;
    const { expenses } = this.props;
    return (
      <header>
        <div className="Header-email">
          <img
            src="https://cdn-icons-png.flaticon.com/512/456/456283.png"
            alt="profile"
            width="20px"
          />
          <p data-testid="email-field">{email}</p>
        </div>
        <h2>Gerenciar despesas</h2>
        <div className="Header-despesa">
          <img src="https://cdn-icons-png.flaticon.com/512/3814/3814848.png" alt="carteira" width="30px"/>
          <div className="Header-total">
            <p>Despesa total:</p>
            <p data-testid="total-field">
              {this.somaTotal()}
            </p>
            <p data-testid="header-currency-field">BRL</p>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  valorConvertido: state.wallet.valorConvertido,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  valorConvertido: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default connect(mapStateToProps, null)(Header);
