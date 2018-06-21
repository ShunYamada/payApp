import { combineReducers } from 'redux';
import PayFormReducer from './PayFormReducer';

export default combineReducers({
  payForm: PayFormReducer
});
