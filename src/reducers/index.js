import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import shortStoryReducer from './shortStoryReducer';
import longStoryReducer from './longStoryReducer';
import chapterReducer from './chapterReducer';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  shortStories: shortStoryReducer,
  longStories: longStoryReducer,
  chapters: chapterReducer
});
