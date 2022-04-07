import { RECEIVE_CURRENCIES_FAILURE, RECEIVE_CURRENCIES_SUCCESS,
  REQUEST_CURRENCIES, CARTEIRA, TOTAL } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  error: null,
  data: [],
  valorConvertido: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CARTEIRA:
    return {
      ...state,
      expenses: [...state.expenses, action.state],
    };
  case TOTAL:
    return {
      ...state,
      valorConvertido: [...state.valorConvertido, action.state],
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
      data: action.data,
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
