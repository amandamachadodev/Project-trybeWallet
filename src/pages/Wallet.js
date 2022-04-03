import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getCurrency from '../services/api';
import { fetchCurrency } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
    };
  }

  componentDidMount = async () => {
    const { getCurrency } = this.props;
    getCurrency();
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">Despesa total: 0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.email,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(fetchCurrency()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  getCurrency: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
