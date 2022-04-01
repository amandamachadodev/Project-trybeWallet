const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'CARTEIRA':
    return { ...state,
      currencies: action.state.currencies,
      expenses: action.state.expenses,
    };
  default:
    return state;
  }
};

export default wallet;
