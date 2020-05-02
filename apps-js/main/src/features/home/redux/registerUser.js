import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  HOME_REGISTER_USER,
} from './constants';

export function registerUser(user) {
  return {
    payload: user,
    type: HOME_REGISTER_USER,
  };
}

export function useRegisterUser() {
  const dispatch = useDispatch();
  const boundAction = useCallback((...params) => dispatch(registerUser(...params)), [dispatch]);
  return { registerUser: boundAction };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_REGISTER_USER:
      return {
        ...state,
        token: action.payload.token,
        baseApiUrl: action.payload.base_url,
      };

    default:
      return state;
  }
}
