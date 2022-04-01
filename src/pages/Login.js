import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      buttonDisabled: true,
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => this.buttonAble());
  }

  buttonAble = () => {
    const { email, password } = this.state;
    const six = 6;
    const regex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
    const emailTest = regex.test(email);
    if ((password.length >= six) && emailTest) {
      this.setState({ buttonDisabled: false });
    } else {
      this.setState({ buttonDisabled: true });
    }
  }

  render() {
    const { email, password, buttonDisabled } = this.state;
    const { myFirstDispatch } = this.props;
    return (
      <div>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            data-testid="email-input"
            id="email"
            onChange={ this.handleChange }
            name="email"
            value={ email }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            data-testid="password-input"
            id="password"
            onChange={ this.handleChange }
            name="password"
            value={ password }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            onClick={ () => myFirstDispatch(email) }
            disabled={ buttonDisabled }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  myFirstDispatch: (email) => dispatch(userLogin(email)),
});

Login.propTypes = {
  myFirstDispatch: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Login);
