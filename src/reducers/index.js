import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import shortStoryReducer from './shortStoryReducer';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  shortStories: shortStoryReducer
});
