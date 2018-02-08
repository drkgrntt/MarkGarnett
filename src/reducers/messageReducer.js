import {
  MESSAGES_FETCH_SUCCESS,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case MESSAGES_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
