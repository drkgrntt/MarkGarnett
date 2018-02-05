import firebase from 'firebase';
import _ from 'lodash';
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
  RESET_FEATURE,
  MAKE_FEATURE,

  CREATE_CHAPTER,
  UPDATE_LONG_STORY,
  DELETE_LONG_STORY,
  LONG_STORIES_FETCH_SUCCESS,

  UPDATE_CHAPTER,
  DELETE_CHAPTER,
  CHAPTERS_FETCH_SUCCESS
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
export const createShortStory = ({ title, forward, image, content}, history) => {
  return (dispatch) => {
    history.push('/admin/success');
    firebase.database().ref('/shortStories')
      .push({ title, forward, image, content, isFeature: false })
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

export const resetFeature = (shortStories, story, history) => {
  return (dispatch) => {
    _.map(shortStories, (foundStory) => {
      if (foundStory.isFeature) {
        firebase.database().ref(`/shortStories/${foundStory.uid}`)
          .update({ isFeature: false })
          .then(() => {
            dispatch(makeFeature(story, history));
          });
      }
    });
  };
};

const makeFeature = (story, history) => {
  return (dispatch) => {
    history.push('/admin/success');
    firebase.database().ref(`/shortStories/${story.uid}`)
      .update({ isFeature: true })
      .then(() => {
        dispatch({ type: MAKE_FEATURE });
      });
  };
};

export const updateShortStory = ({ title, forward, image, content }, uid, history) => {
  return (dispatch) => {
    history.push('/admin/success');
    firebase.database().ref(`/shortStories/${uid}`)
      .update({ title, forward, image, content })
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

// LONG STORY ACTIONS
export const createLongStory = ({ storyTitle, storyImage, chapterTitle, chapterImage, chapterContent }, history) => {
  return (dispatch) => {
    firebase.database().ref('/longStories')
      .push({ storyTitle, storyImage })
      .then((longStory) => {
        const uid = longStory.path.pieces_[1];

        dispatch(createChapter(uid, chapterTitle, chapterImage, chapterContent, history));
      });
  };
};

export const longStoriesFetch = () => {
  return (dispatch) => {
    firebase.database().ref('/longStories')
      .on('value', (snapshot) => {
        dispatch({ type: LONG_STORIES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const updateLongStory = ({ storyTitle, storyImage }, uid, history) => {
  return (dispatch) => {
    history.push('/admin/success');
    firebase.database().ref(`/longStories/${uid}`)
      .update({ storyTitle, storyImage })
      .then(() => {
        dispatch({ type: UPDATE_LONG_STORY });
      });
  };
};

export const deleteLongStory = (uid, history) => {
  return (dispatch) => {
    history.push('/admin/success');
    firebase.database().ref(`/longStories/${uid}`)
      .remove()
      .then(() => {
        dispatch({ type: DELETE_LONG_STORY });
      });
  };
};

// CHAPTER ACTIONS
export const createChapter = (uid, chapterTitle, chapterImage, chapterContent, history) => {
  return (dispatch) => {
    history.push('/admin/success');
    firebase.database().ref(`longStories/${uid}/chapters`)
      .push({ chapterTitle, chapterImage, chapterContent })
      .then(() => {
        dispatch({ type: CREATE_CHAPTER });
      });
  };
};

export const updateChapter = (uid, chapter_uid, { chapterTitle, chapterImage, chapterContent }, history) => {
  return (dispatch) => {
    history.push('/admin/success');
    firebase.database().ref(`/longStories/${uid}/chapter/${chapter_uid}`)
      .update({ chapterTitle, chapterImage, chapterContent })
      .then(() => {
        dispatch({ type: UPDATE_CHAPTER });
      });
  };
};

export const deleteChapter = (uid, chapter_uid, history) => {
  return (dispatch) => {
    history.push('/admin/success');
    firebase.database().ref(`/longStories/${uid}/chapters/${chapter_uid}`)
      .remove()
      .then(() => {
        dispatch({ type: DELETE_CHAPTER });
      });
  };
};

export const chaptersFetch = (uid) => {
  return (dispatch) => {
    firebase.database().ref(`/longStories/${uid}/chapters`)
      .on('value', (snapshot) => {
        dispatch({ type: CHAPTERS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
