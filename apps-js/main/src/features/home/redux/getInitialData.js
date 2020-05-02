import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  HOME_GET_INITIAL_DATA_BEGIN,
  HOME_GET_INITIAL_DATA_SUCCESS,
  HOME_GET_INITIAL_DATA_FAILURE,
  HOME_GET_INITIAL_DATA_DISMISS_ERROR,
} from './constants';
import httpService from '../../../services/httpService';

export function getInitialData(args = {}) {
  return (dispatch, getState) => { // optionally you can have getState as the second argument
    dispatch({
      type: HOME_GET_INITIAL_DATA_BEGIN,
    });

    const promise = new Promise((resolve, reject) => {
      const doRequest = httpService(getState().home.token).get(getState().home.baseApiUrl + 'initial-data')
      console.log(getState().home.token)
      doRequest.then(
        (res) => {
          dispatch({
            type: HOME_GET_INITIAL_DATA_SUCCESS,
            data: res,
          });
          resolve(res);
        },
        // Use rejectHandler as the second argument so that render errors won't be caught.
        (err) => {
          dispatch({
            type: HOME_GET_INITIAL_DATA_FAILURE,
            data: { error: err },
          });
          reject(err);
        },
      );
    });

    return promise;
  };
}

export function dismissGetInitialDataError() {
  return {
    type: HOME_GET_INITIAL_DATA_DISMISS_ERROR,
  };
}

export function useGetInitialData() {
  const dispatch = useDispatch();

  const { getInitialDataPending, getInitialDataError } = useSelector(
    state => ({
      getInitialDataPending: state.home.getInitialDataPending,
      getInitialDataError: state.home.getInitialDataError,
    }),
    shallowEqual,
  );

  const boundAction = useCallback((...args) => {
    return dispatch(getInitialData(...args));
  }, [dispatch]);

  const boundDismissError = useCallback(() => {
    return dispatch(dismissGetInitialDataError());
  }, [dispatch]);

  return {
    getInitialData: boundAction,
    getInitialDataPending,
    getInitialDataError,
    dismissGetInitialDataError: boundDismissError,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_GET_INITIAL_DATA_BEGIN:
      // Just after a request is sent
      return {
        ...state,
        getInitialDataPending: true,
        getInitialDataError: null,
      };

    case HOME_GET_INITIAL_DATA_SUCCESS:
      // The request is success
      return {
        ...state,
        currentUser: action.data.data,
        getInitialDataPending: false,
        getInitialDataError: null,
      };

    case HOME_GET_INITIAL_DATA_FAILURE:
      // The request is failed
      return {
        ...state,
        getInitialDataPending: false,
        getInitialDataError: action.data.error,
      };

    case HOME_GET_INITIAL_DATA_DISMISS_ERROR:
      // Dismiss the request failure error
      return {
        ...state,
        getInitialDataError: null,
      };

    default:
      return state;
  }
}
