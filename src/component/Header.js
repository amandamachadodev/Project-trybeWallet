import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  somaTotal = () => {
    const { expenses, valorConvertido } = this.props;
    console.log(valorConvertido);
    const soma = expenses.length === 0 ? 0
      : valorConvertido.reduce((result, number) => (result + number), 0);
    return soma.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">{email}</p>
        <p>Despesa total:</p>
        <p data-testid="total-field">
          {this.somaTotal()}
        </p>
        <p data-testid="header-currency-field">BRL</p>
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
