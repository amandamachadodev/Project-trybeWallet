import { RECEIVE_CURRENCIES_FAILURE, RECEIVE_CURRENCIES_SUCCESS,
  REQUEST_CURRENCIES, CARTEIRA } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  error: null,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CARTEIRA:
    return {
      ...state,
      expenses: action.state,
    };
  case REQUEST_CURRENCIES:
    return {
      ...state,
      isFetching: true,
    };
  case RECEIVE_CURRENCIES_SUCCESS:
    return {
      ...state,
      isFetching: false,
      currencies: action.currencies,
    };
  case RECEIVE_CURRENCIES_FAILURE:
    return {
      ...state,
      isFetching: false,
      error: action.error,
    };
  default:
    return state;
  }
};

export default wallet;
