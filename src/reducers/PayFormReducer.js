import {
  PAY_UPDATE,
  PAY_CREATE,
} from '../actions/types';

const INITIAL_STATE = {
  cardNumber: '',
  expiryMonth: '',
  expiryYear: '',
  cvc: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PAY_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case PAY_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
