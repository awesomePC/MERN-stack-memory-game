import { STORE_TEMPID } from '../types';

export default (state, action) => {
  switch (action.type) {
    case STORE_TEMPID:
      return {
        ...state,
        tempId: [action.payload],
      };
    default:
      return state;
  }
};
