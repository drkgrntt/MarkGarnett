import firebase from 'firebase';
import { 
  REGISTER_USER,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,

  CREATE_SHORT_STORY,
  EDIT_SHORT_STORY,
  DELETE_SHORT_STORY,
  SHORT_STORIES_FETCH_SUCCESS
} from './types';

// AUTH ACTIONS
export const registerUser = ({ email, password, adminCode }, history) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_USER });

    if (adminCode === 'password') {
      return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, history, user))
        .catch((err) => loginUserFail(dispatch, err));      
    }

    return loginUserFail(dispatch);
  };
};

export const loginUser = ({ email, password }, history) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => loginUserSuccess(dispatch, history, user))
      .catch((err) => loginUserFail(dispatch, err));
  };
};

const loginUserFail = (dispatch, err) => {
  console.log(err);
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, history, user) => {
  history.push('/admin/dashboard');
  dispatch({
    type: LOGIN_USER_SUCCESS,
    paylaod: user
  });
};

export const logoutUser = (history) => {
  return (dispatch) => {
    history.push('/');
    dispatch({ type: LOGOUT_USER });

    firebase.auth().signOut()
      .then(() => {})
      .catch((err) => {console.log(err)});
  };
};

// SHORT STORY ACTIONS
export const createShortStory = ({ title, image, content}, history) => {
  return (dispatch) => {
    history.push('/admin/success');
    firebase.database().ref('/shortStories')
      .push({ title, image, content })
      .then(() => {
        dispatch({ type: CREATE_SHORT_STORY });
      });
  };
};

export const shortStoriesFetch = () => {
  return (dispatch) => {
    firebase.database().ref('/shortStories')
      .on('value', (snapshot) => {
        dispatch({ type: SHORT_STORIES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
