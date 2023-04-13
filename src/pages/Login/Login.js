import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLogin } from '../../actions';
import './styles.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      buttonDisabled: true,
      redirect: false,
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

  handleClick = () => {
    const { myFirstDispatch } = this.props;
    const { email } = this.state;
    myFirstDispatch(email);
    this.setState({ redirect: true });
  };

  render() {
    const { email, password, buttonDisabled, redirect } = this.state;
    console.log(redirect);
    return (
      <div className="Login-wrapper">
        <img src="https://cdn-icons-png.flaticon.com/512/3814/3814848.png" alt="carteira" width="100px"/>
        {/* <p>Login</p> */}
        <label htmlFor="email">
          <input
            className="Login-input"
            placeholder='Email'
            type="email"
            data-testid="email-input"
            id="email"
            onChange={ this.handleChange }
            name="email"
            value={ email }
          />
        </label>
        <label htmlFor="password">
          <input
            className="Login-input"
            placeholder='Senha'
            type="password"
            data-testid="password-input"
            id="password"
            onChange={ this.handleChange }
            name="password"
            value={ password }
          />
        </label>
        <button
          className="Login-button"
          type="button"
          onClick={ this.handleClick }
          disabled={ buttonDisabled }
        >
          Entrar
        </button>
        { redirect && <Redirect to="/carteira" /> }
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
