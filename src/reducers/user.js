import { RECEIVE_CURRENCIES_FAILURE, RECEIVE_CURRENCIES_SUCCESS,
  REQUEST_CURRENCIES, CARTEIRA, TOTAL, DELETE_EXPENSES, SUBT_TOTAL } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  error: null,
  data: [],
  valorConvertido: [0],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CARTEIRA:
    return {
      ...state,
      expenses: [...state.expenses, action.state],
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
  case DELETE_EXPENSES:
    if (state.expenses.length == 1) {
      return {
        ...state,
      expenses: []
      }
    } else {
      return {
        ...state,
        expenses: state.expenses.filter((e) => e.id !== action.state ),
      }
    };
  default:
    return state;
  }
};

export default wallet;
