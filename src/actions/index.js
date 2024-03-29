import getCurrency from '../services/api';
// Coloque aqui suas actions
export const REQUEST_CURRENCIES = 'REQUEST_CURRESCIES';
export const RECEIVE_CURRENCIES_SUCCESS = 'RECEIVE_CURRENCIES_SUCCESS';
export const RECEIVE_CURRENCIES_FAILURE = 'RECEIVE_CURRENCIES_FAILURE';
export const CARTEIRA = 'CARTEIRA';
export const DELETE_EXPENSES = 'DELETE_EXṔENSES';

export const userLogin = (state) => ({ type: 'LOGIN', state });
export const walletBank = (state) => ({ type: CARTEIRA, state });
export const deleteExpenses = (state) => ({ type: DELETE_EXPENSES, state});

export const requestCurrency = () => ({
  type: REQUEST_CURRENCIES,
});

export const currenciesSuccess = (data) => ({
  type: RECEIVE_CURRENCIES_SUCCESS,
  currencies: Object.keys(data).filter((element) => element !== 'USDT'),
  data,
});

export const currenciesFailure = (error) => ({
  type: RECEIVE_CURRENCIES_FAILURE,
  error,
});

export function fetchCurrency() {
  return async (dispatch) => {
    dispatch(requestCurrency());
    try {
      const data = await getCurrency();
      dispatch(currenciesSuccess(data));
    } catch (error) {
      dispatch(currenciesFailure(error));
    }
  };
}
