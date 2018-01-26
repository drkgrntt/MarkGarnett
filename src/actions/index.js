import firebase from 'firebase';
import { 
  CHECK_ADMIN_CODE,
  REGISTER_USER,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,

  CREATE_SHORT_STORY,
  UPDATE_SHORT_STORY,
  DELETE_SHORT_STORY,
  SHORT_STORIES_FETCH_SUCCESS,
  SHORT_STORY_FETCH_SUCCESS
} from './types';

// AUTH ACTIONS
export const checkAdminCode = ({ email, password, adminCode }, history) => {
  return (dispatch) => {
    dispatch({ type: CHECK_ADMIN_CODE });

    firebase.database().ref('/env/adminCode').once('value', (snapshot) => {
      if (snapshot.val() === adminCode) {
        return dispatch(registerUser(email, password, history));
      }

      return loginUserFail(dispatch);
    });
  };
};

const registerUser = (email, password, history) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_USER });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => loginUserSuccess(dispatch, history, user))
      .catch((err) => loginUserFail(dispatch, err));      
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

export const updateShortStory = ({ title, image, content }, uid, history) => {
  return (dispatch) => {
    history.push('/admin/success');
    firebase.database().ref(`/shortStories/${uid}`)
      .set({ title, image, content })
      .then(() => {
        dispatch({ type: UPDATE_SHORT_STORY });
      });
  };
};

export const deleteShortStory = (uid, history) => {
  return (dispatch) => {
    history.push('/admin/success');
    firebase.database().ref(`/shortStories/${uid}`)
      .remove()
      .then(() => {
        dispatch({ type: DELETE_SHORT_STORY });
      });
  };
};
