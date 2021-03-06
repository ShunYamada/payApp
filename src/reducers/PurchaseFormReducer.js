import {
  PURCHASE_UPDATE,
  PURCHASE_CREATE,
} from '../actions/types';

const INITIAL_STATE = {
  price: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PURCHASE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case PURCHASE_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
