import {
  LONG_STORIES_FETCH_SUCCESS,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case LONG_STORIES_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
