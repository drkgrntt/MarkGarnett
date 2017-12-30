import axios from 'axios';
import {
  FETCH_USER
} from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/currentUser');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const createUserAsAdmin = (values, history) => async (dispatch) => {
  const res = axios.post('/api/register', values);

  history.push('/');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const loginUserAsAdmin = (values, history) => async (dispatch) => {
  const res = axios.post('/api/login', values);

  history.push('/')
  dispatch({ type: FETCH_USER , payload: res.data });
};
