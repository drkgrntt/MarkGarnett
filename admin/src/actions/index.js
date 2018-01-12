import firebase from 'firebase';
import { 
  REGISTER_USER,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER
} from './types';

export const registerUser = ({ email, password, adminCode }, history) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_USER });

    if (adminCode === 'password') {
      return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, history, user))
        .catch(() => loginUserFail(dispatch));      
    }

    return loginUserFail(dispatch);
  };
};

export const loginUser = ({ email, password }, history) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => loginUserSuccess(dispatch, history, user))
      .catch(() => loginUserFail(dispatch));
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, history, user) => {
  history.push('/dashboard');
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
