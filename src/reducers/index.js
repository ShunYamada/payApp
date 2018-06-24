import { combineReducers } from 'redux';
import PayFormReducer from './PayFormReducer';
import PurchaseFormReducer from './PurchaseFormReducer';

export default combineReducers({
  payForm: PayFormReducer,
  purchaseForm: PurchaseFormReducer
});
