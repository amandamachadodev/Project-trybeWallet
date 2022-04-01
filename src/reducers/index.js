import { combineReducers } from 'redux';
import user from './wallet';
import wallet from './user';

const rootReducer = combineReducers({ user, wallet });

export default rootReducer;
